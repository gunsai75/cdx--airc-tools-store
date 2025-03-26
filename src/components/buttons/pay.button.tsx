// PaymentButton.tsx
"use client";

import { useState } from "react";
import Script from "next/script";
import pay from "@/actions/payment/pay.action";
import { verifyPayment } from "@/actions/payment/verifypay.action";
import { RainbowButton } from "../magicui/rainbow-button";
import { toast } from "sonner";

// Razorpay type definitions
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (event: string, callback: (response: any) => void) => void;
    };
  }
}

export default function PaymentButton() {
  const [amount, setAmount] = useState("500");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderResponse = await pay(parseFloat(amount));

      console.log('ORDER RESPONSE 💵', orderResponse);

      if (!orderResponse?.success || !orderResponse?.orderId) {
        toast.error(orderResponse?.error || "Order creation failed");
        throw new Error(orderResponse?.error || "Order creation failed");
      }


      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, 
        amount: parseFloat(amount) * 100, 
        currency: "INR",
        name: "AIRC - Woxsen University",
        description: "Payment for AIRC Tools Store",
        order_id: orderResponse.orderId,
        handler: async function (response: RazorpayResponse) {
          const verification = await verifyPayment({
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          if (verification.success) {
            toast.success("Payment successful and verified!");
          } else {
toast.error(`Payment verification failed: ${verification.error}`);
        }
        },
        prefill: {
          name: "AIRC Tools Store",
          email: "airc@woxsen.edu.in",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response: any) {
        toast.error(`Payment failed: ${response.error.description}`);
      });

      paymentObject.open();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <form onSubmit={handlePayment}>
        <RainbowButton type="submit" className="text-xs rounded-full">
          {loading ? "Processing..." : "Pay Now"}
        </RainbowButton>
      </form>
    </>
  );
}