// app/api/initiate/route.js
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  const { amount, username, paymentform } = await req.json();

  // ——— DEBUG: inspect your env
  console.log("⚙️ RAZORPAY_KEY_ID:",    process.env.NEXT_PUBLIC_KEY_ID);
  console.log("⚙️ RAZORPAY_KEY_SECRET:", process.env.KEY_SECRET);

  const key_id     = process.env.NEXT_PUBLIC_KEY_ID;
  const key_secret = process.env.KEY_SECRET;

  if (!key_id || !key_secret) {
    console.error("🚨 Missing Razorpay credentials in process.env");
    return NextResponse.json(
      { error: "Server misconfiguration: missing Razorpay keys" },
      { status: 500 }
    );
  }

  // Now that we know they exist, construct Razorpay client
  const rz = new Razorpay({ key_id, key_secret });

  const order = await rz.orders.create({
    amount,
    currency: "INR",
    receipt: `rcpt_${Date.now()}`,
    notes: { username, ...paymentform },
  });

  return NextResponse.json(order);
}
