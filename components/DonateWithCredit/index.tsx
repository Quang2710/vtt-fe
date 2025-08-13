'use client'

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const DonateWithCredit = ({ amount, clientSecret, slug,id }: { amount: number, clientSecret: string, slug: string, id: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setError(String(submitError.message));
            setLoading(false);
            return;
        }
        const { error: paymentError } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/detail-blog/${slug}/${id}/donate/donate-information/thank-for-donation?amount=${amount}`
            }
        });
        setLoading(false);
        if (paymentError) setError(String(paymentError.message));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
            {clientSecret && <PaymentElement />}
            {error && <div className="text-red-500">{error}</div>}
            {loading && (
                <div className="flex items-center justify-center mb-2 mt-2">
                    <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black mr-2"></span>
                    <span className="text-black">Processing...</span>
                </div>
            )}
            <button disabled={!stripe || loading} className="text-white w-full p-5 bg-black mt-2 cursor-pointer">
                Pay
            </button>
        </form>
    );
};

export default DonateWithCredit;