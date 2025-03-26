"use server";
import { auth } from "@/auth";
import { convertAmountToTokens } from "@/lib/utils";
import Razorpay from "razorpay";


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});


export default async function pay(amount: number) {
    // check user
    const session = await auth();
    if(!session) return;
  
    // translate amount to paise
    const amountInPaise = amount * 100;
    // translate amount to token
    const tokens = convertAmountToTokens(amount);
    
    
    try {
    const options = {
      amount: amountInPaise, // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log("order 📦", order);

    // check for 


    // call api

    // verify payment
    // if verified then update user balance

    // return success





    return { success: true, orderId:order.id, tokens };
  } catch (error) {
    return { success: false, error: "Failed to create order" };
  }
}




