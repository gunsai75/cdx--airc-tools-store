"use server";

import crypto from "crypto";


export async function verifyPayment({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}) {
  try {
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    if (generatedSignature === signature) {
      return { success: true, message: "Payment verified" };
    } else {
      return { success: false, error: "Invalid signature" };
    }
  } catch (error) {
    console.error("Verification failed:", error);
    return { success: false, error: "Verification failed" };
  }
}