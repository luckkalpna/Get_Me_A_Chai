'use client'
import PaymentPage from "@/components/PaymentPage";
import { useParams } from "next/navigation";
import React from "react";

const Username = async () => {
  // console.log(params)
  const { username } = useParams(); 
  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username
// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Chai`,
//   }
// }
