'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonateWithCredit from "@/components/DonateWithCredit";
import convertToSubcurrency from "@/libs/convertToSubcurrency";
import { fetcher } from "@/libs/fetcher";
import { useUserStore } from "@/stores/userStore";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");
const DonateWithCreditPage = () => {
    const searchParams = useSearchParams();
    const params = useParams();
    const router = useRouter();

    const amount = Number(searchParams.get("amount") || 0);
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || "";
    const tip = Number(searchParams.get("tip") || 0);
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
 
    useEffect(() => {
        if (amount > 0) {
            fetcher("/donations/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: convertToSubcurrency(amount),
                    tip: tip,
                    name: name,
                    email: email,
                    fundraiser_id: Number(params.id),
                }),
            })
                .then((res) => {
                    if (res && res.clientSecret) {
                        setClientSecret(res.clientSecret);
                        setError(null);
                    } else {
                        setError("Unable to create payment. Please try again later.");
                    }
                })
                .catch(() => setError("Unable to connect to server. Please try again later."));
        }
    }, [amount, name, email, tip, params.id]);

    if (error) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center">
                    <span className="text-lg text-red-600 font-semibold mb-2">An error occurred!</span>
                    <span className="text-base text-gray-700">{error}</span>
                    <button
                        className="cursor-pointer mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        onClick={() => router.push("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    if (!clientSecret) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center">
                    <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500 mb-4"></span>
                    <span className="text-lg text-blue-600 font-semibold">Loading payment...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-10">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <DonateWithCredit amount={amount} clientSecret={clientSecret} slug={slug} id={Number(params.id)} />
            </Elements>
        </div>
    );
};

export default DonateWithCreditPage;
