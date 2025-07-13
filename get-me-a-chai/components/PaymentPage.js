"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
// import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
// import { notFound } from "next/navigation";
export default function PaymentPage() {
  // pull the username from the URL
  const { username } = useParams();

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  // const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    // let u = await fetchuser(username);
    if (!username) return;
    let u = await fetchuser(username);
    setcurrentUser(u);
    // let dbpayments = await fetchpayments(username);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };
  const pay = async (amount) => {
    // Get the order Id
    // let a = await initiate(amount, username, paymentform);
    // let orderId = a.id;

    // call *your* API instead of the server helper directly
    const res = await fetch("/api/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, username, paymentform }),
    });
    if (!res.ok) {
      const err = await res.json();
      console.error(err);
      return;
    }
    const a = await res.json();
    let orderId = a.id;

    var options = {
      // key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350]"
          src="profile_bg.gif"
          alt="banner-img"
        />
        <div className="absolute -bottom-15 right-[44%] border-2 border-white rounded-full">
          <img
            className="rounded-full"
            width={200}
            height={200}
            src="profile.gif"
            alt="profile-img"
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-20">
        {/* <div className="font-bold text-lg">@{username}</div>
         */}
        <div className="font-bold text-lg">@{username}</div>
        {/* <div className="text-slate-400 capitalize">
        Lets help {username} get a chai!
      </div> */}
        <div className="text-slate-400 capitalize">
          Let’s help {username} get a chai!
        </div>
        <div className="text-slate-400">
          9,719 members . 82 posts . $15,450/release
        </div>

        <div className="payment flex gap-3 w-[80%] my-5">
          <div className="supporters w-1/2 bg-slate-900 p-10 text-white">
            {/* show list of all the supporters as a leaderboard  */}
            <h2 className="text-lg font-bold my-4">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={30}
                  height={25}
                  src="user.png"
                  alt="user-profile"
                  className="bg-slate-50 rounded-full"
                />
                Neha donated <span className="font-bold">$10</span> with a
                message "I support you. Lots of ❤️"
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={30}
                  height={25}
                  src="user.png"
                  alt="user-profile"
                  className="bg-slate-50 rounded-full"
                />
                Neha donated <span className="font-bold">$20</span> with a
                message "I support you. Lots of ❤️"
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={30}
                  height={25}
                  src="user.png"
                  alt="user-profile"
                  className="bg-slate-50 rounded-full"
                />
                Neha donated <span className="font-bold">$30</span> with a
                message "I support you. Lots of ❤️"
              </li>
            </ul>
          </div>
          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message   */}
              <div>
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  name="name"
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />

              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
              >
                Pay
              </button>
            </div>
            {/* Or choose from these amounts  */}
            <div className="flex flex-col md:flex-row gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default PaymentPage;
