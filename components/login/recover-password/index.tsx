"use client";

import { useState } from "react";

export default function RecoverPasswordForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You would send `email` to your backend here
        setSubmitted(true);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 text-center mt-12">
            <h2 className="text-xl font-semibold mb-2">Reset password</h2>
            <p className="text-gray-600 mb-6">
                Enter the email address associated with your account, and we’ll email you the password.
            </p>

            {submitted ? (
                <p className="text-green-600 font-medium">
                    ✅ If this email is associated with an account, instructions have been sent.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-md transition duration-300 text-sm"
                    >
                        SEND ME THE RESET PASSWORD INSTRUCTION
                    </button>
                </form>
            )}
        </div>
    );
}
