"use client";

import { fetcher } from "@/libs/fetcher";
import { recoverPasswordSchema } from "@/libs/validation-schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

export default function RecoverPasswordForm() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (values: any) => {
    setSubmitted(true);
    setApiError("");
    try {
      console.log("values", values);
      const res = await fetcher(`/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log("res", res);
    } catch (err: any) {
      setApiError(err.message || "Unexpected error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 text-center mt-12">
      <h2 className="text-xl font-semibold mb-2">Reset password</h2>
      <p className="text-gray-600 mb-6">
        Enter the email address associated with your account, and we’ll email
        you the password.
      </p>

      {submitted ? (
        <p className="text-green-600 font-medium">
          ✅ If this email is associated with an account, instructions have been
          sent.
        </p>
      ) : (
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={recoverPasswordSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4 mb-5">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-600 pt-1 text-left"
              />
            </div>
            {apiError && (
              <div className="text-sm text-red-600 text-center">{apiError}</div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md shadow"
            >
              SEND ME THE RESET PASSWORD INSTRUCTION
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
