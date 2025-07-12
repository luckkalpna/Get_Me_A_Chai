import React from "react";

const Username = async ({ params }) => {
  return (
    <>
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
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400 capitalize">
          created animated art for KALPANA's
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
          <div className="makePayment w-1/2 bg-slate-900 p-10 text-white">
            <h2 className="text-lg font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="w-full bg-slate-800 rounded-lg p-3"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full bg-slate-800 rounded-lg p-3"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full bg-slate-800 rounded-lg p-3"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* or choose from these aamounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $10
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $20
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username
 
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Chai`,
  }
}
