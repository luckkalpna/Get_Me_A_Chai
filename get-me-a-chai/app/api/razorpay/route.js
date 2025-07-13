// app/api/razorpay/route.js
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  // 1) Verify DB has the order
  const p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json(
      { success: false, message: "Order Id not found" },
      { status: 404 }
    );
  }

  // 2) Verify signature
  try {
    validatePaymentVerification(
      { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
      body.razorpay_signature,
      process.env.SECRET_KEY             // ← your exact secret var
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Signature verification failed" },
      { status: 400 }
    );
  }

  // 3) (Optional) Capture payment via Razorpay REST API
  const auth =
    "Basic " +
    Buffer.from(
      `${process.env.NEXT_PUBLIC_KEY_ID}:${process.env.SECRET_KEY}`
    ).toString("base64");
  const captureRes = await fetch(
    `https://api.razorpay.com/v1/payments/${body.razorpay_payment_id}/capture`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: JSON.stringify({ amount: p.amount }),
    }
  );
  if (!captureRes.ok) {
    const err = await captureRes.json();
    return NextResponse.json(err, { status: captureRes.status });
  }

  // 4) Mark it done in your DB
  const updated = await Payment.findOneAndUpdate(
    { oid: body.razorpay_order_id },
    { done: true },
    { new: true }
  );

  // 5) Redirect back to the user
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_URL}/${updated.to_user}?paymentdone=true`
  );
}
