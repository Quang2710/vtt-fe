'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("pk_test_51Nw...your_publishable_key_here...");

function StripeForm({ amount, slug }: { amount: string, slug: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [loadingStatus, setLoadingStatus] = useState<'processing' | 'success' | 'fail' | null>(null);
    const [loadingError, setLoadingError] = useState<string>("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setLoadingStatus('processing');
        setLoadingError("");
        try {
            if (!stripe || !elements) {
                setLoadingStatus('fail');
                setLoadingError("Stripe.js has not loaded yet.");
                setLoading(false);
                return;
            }
            // Call backend to create PaymentIntent
            const res = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, slug })
            });
            const { clientSecret } = await res.json();
            if (!clientSecret) {
                setLoadingStatus('fail');
                setLoadingError("Failed to initiate payment.");
                setLoading(false);
                return;
            }
            // Confirm card payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)!,
                },
            });
            if (result.error) {
                setLoadingStatus('fail');
                setLoadingError(result.error.message || "Payment failed.");
                setLoading(false);
                return;
            }
            if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setLoadingStatus('success');
                setLoading(false);
                setTimeout(() => {
                    router.push(`/detail-blog/1/donate/donate-information/thank-for-donate?amount=${amount}`);
                }, 2000);
                return;
            }
            setLoadingStatus('fail');
            setLoadingError("Unknown error");
            setLoading(false);
        } catch (err: any) {
            setLoadingStatus('fail');
            setLoadingError(err?.message || "Payment failed.");
            setLoading(false);
        }
    };

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    // Import LoadingPayment component
    // ...existing code...
    const LoadingPayment = require("@/components/loading-payment").default;
    if (loadingStatus) {
        return <LoadingPayment status={loadingStatus} error={loadingError} />;
    }
    return (
        <form className="w-full max-w-2xl mx-auto px-4 py-10" onSubmit={handleSubmit}>
            <p className="text-[16px] text-[#333] mt-[20px] font-bold">
                Enter your Credit/Debit Card details below
            </p>
            <div className="flex flex-col gap-4 mt-8">
                <label className="flex flex-col gap-2">
                    <span className="text-[16px] text-[#333] font-medium">Credit/Debit Card</span>
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9 ]*"
                        placeholder="Card number"
                        value={cardNumber}
                        onChange={e => {
                            let value = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
                            let formatted = value.replace(/(.{4})/g, "$1 ").trim();
                            if (formatted.length > 19) formatted = formatted.slice(0, 19);
                            setCardNumber(formatted);
                        }}
                        maxLength={19}
                        className="w-full text-[14px] font-normal leading-[20px] rounded-[12px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] bg-white border border-[#b4b4b4] box-border text-[#333] block outline-none px-[15px] py-[15px] focus:border-pink-600"
                        style={{ color: "rgba(51,51,51,.87)" }}
                        autoComplete="cc-number"
                    />
                </label>
                <div className="flex gap-4">
                    <label className="flex-1 flex flex-col gap-2">
                        <span className="text-[16px] text-[#333] font-medium">Expiry</span>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={e => {
                                let value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
                                let formatted = value;
                                if (value.length > 2) {
                                    formatted = value.slice(0, 2) + "/" + value.slice(2);
                                }
                                setExpiry(formatted);
                            }}
                            maxLength={5}
                            className="w-full text-[14px] font-normal leading-[20px] rounded-[12px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] bg-white border border-[#b4b4b4] box-border text-[#333] block outline-none px-[15px] py-[15px] focus:border-pink-600"
                            style={{ color: "rgba(51,51,51,.87)" }}
                        />
                    </label>
                    <label className="flex-1 flex flex-col gap-2">
                        <span className="text-[16px] text-[#333] font-medium">CVC</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="CVC"
                            value={cvc}
                            onChange={e => setCvc(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
                            maxLength={3}
                            className="w-full text-[14px] font-normal leading-[20px] rounded-[12px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] bg-white border border-[#b4b4b4] box-border text-[#333] block outline-none px-[15px] py-[15px] focus:border-pink-600"
                            style={{ color: "rgba(51,51,51,.87)" }}
                        />
                    </label>
                </div>
                {error && (
                    <div className="w-full bg-red-50 border border-red-400 rounded-[8px] p-4 mt-2">
                        <p className="text-[15px] text-red-600 font-semibold mb-1">Oops, there are one or more issues:</p>
                        <p className="text-[14px] text-red-600">{error}</p>
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full h-10 py-0 cursor-pointer rounded-[10px] bg-pink-600 text-white text-[14px] font-bold transition-all duration-200 hover:bg-pink-700 hover:scale-105 flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "DONATE"}
                    {amount && (
                        <span className="ml-2 text-white text-[14px] font-bold">S${amount}</span>
                    )}
                </button>
                <div
                    className="w-full rounded-[10px] bg-[#f4f4f4] box-border px-[15px] py-[20px] text-center mt-4 flex flex-col items-center justify-center"
                >
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-[14px] text-[#999]">Secure payment powered by</p>
                        <Image src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/checkout-logo.png" alt="checkout logo" width={0} height={22} style={{ width: 'auto', height: '22px' }} />
                    </div>
                    <div className="w-full border-t border-[#b4b4b4] mt-[20px] mb-[20px]"></div>
                    <div className="flex items-center justify-center gap-4 w-full">
                        <Image src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/stripe/pci.png" alt="pci" width={0} height={20} style={{ width: 'auto', height: '20px' }} />
                        <Image src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/stripe/ssl.png" alt="ssl" width={0} height={20} style={{ width: 'auto', height: '20px' }} />
                        <Image src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/stripe/visa.png" alt="visa" width={0} height={20} style={{ width: 'auto', height: '20px' }} />
                        <Image src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/stripe/mc.png" alt="mc" width={0} height={20} style={{ width: 'auto', height: '20px' }} />
                    </div>
                </div>
            </div>
        </form>
    );
}

const DonateWithCreditPage = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount") || "";
    const slug = searchParams.get("slug") || "";
    return (
        <Elements stripe={stripePromise}>
            <StripeForm amount={amount} slug={slug} />
        </Elements>
    );
};

export default DonateWithCreditPage;
