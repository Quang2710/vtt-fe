"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema, registerSchema } from "@/libs/validation-schema";
import { fetcher } from "@/libs/fetcher";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

export default function AuthTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register" | string>(
    pathname.replace("/", "") ?? "login"
  );
  const [isRegisterWithEmail, setIsRegisterWithEmail] =
    useState<boolean>(false);
  const [isLoginWithEmail, setIsLoginWithEmail] = useState<boolean>(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setApiError("");
    setIsRegisterWithEmail(false);
    setIsLoginWithEmail(false);
  }, [activeTab]);

  const handleSocialLogin = (provider: "facebook" | "google") => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/login/${provider}`;
  };

  const handleSubmitRegister = async (values: any) => {
    setApiError("");
    try {
      const res = await fetcher(`/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const token = res.token || (res.data && res.data.token);
      if (token) {
        document.cookie = `token=${token}; path=/; max-age=604800`;
        if (res.userInfo) {
          useUserStore.getState().setUser(res.userInfo);
          console.log("userInfo in zustand:", useUserStore.getState().user);
        }
        window.location.href = "/";
      }
    } catch (err: any) {
      setApiError(err.message || "Unexpected error");
    }
  };

  const handleSubmitLogin = async (values: any) => {
    setApiError("");
    try {
      const res = await fetcher(`/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        skipAuth: true,
      });
      const token = res.token || (res.data && res.data.token);
      if (token) {
        document.cookie = `token=${token}; path=/; max-age=604800`;
        if (res.userInfo) {
          useUserStore.getState().setUser(res.userInfo);
          console.log("userInfo in zustand:", useUserStore.getState().user);
        }
        window.location.href = "/";
      }
    } catch (err: any) {
      setApiError(err.message || "Unexpected error");
    }
  };

  const registerEmail = () => {
    if (isRegisterWithEmail) {
    } else {
      setIsRegisterWithEmail(true);
    }
  };

  const loginEmail = () => {
    if (isLoginWithEmail) {
    } else {
      setIsLoginWithEmail(true);
    }
  };

  const loginButtons = () => {
    return (
      <>
        <div className="space-y-4 text-sm">
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-md font-semibold shadow"
          >
            <FaFacebookF />
            LOGIN WITH FACEBOOK
          </button>
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#db4437] text-white py-2 rounded-md font-semibold shadow"
          >
            <FaGoogle />
            LOGIN WITH GOOGLE
          </button>
        </div>

        {/* Divider */}
        <div className="my-4 text-center text-gray-500 text-sm">
          Or log in with email address
        </div>
        {/* Form */}
        {isLoginWithEmail ? (
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmitLogin}
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
                  className="text-sm text-red-600 pt-1"
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600 pt-1"
                />
              </div>
              {apiError && (
                <div className="text-sm text-red-600 text-center">
                  {apiError}
                </div>
              )}

              <button
                type={"submit"}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md shadow"
              >
                LOGIN WITH EMAIL
              </button>
            </Form>
          </Formik>
        ) : (
          <button
            type={"button"}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md shadow"
            onClick={loginEmail}
          >
            LOGIN WITH EMAIL
          </button>
        )}
      </>
    );
  };

  const registerButtons = () => {
    return (
      <>
        <div className="space-y-4  text-sm">
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-md font-semibold shadow"
          >
            <FaFacebookF />
            REGISTER WITH FACEBOOK
          </button>
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#db4437] text-white py-2 rounded-md font-semibold shadow"
          >
            <FaGoogle />
            REGISTER WITH GOOGLE
          </button>
        </div>

        {/* Divider */}
        <div className="my-4 text-center text-gray-500 text-sm">
          Or register with email address
        </div>

        {/* Form */}
        {isRegisterWithEmail ? (
          <Formik
            initialValues={{
              full_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={handleSubmitRegister}
          >
            <Form className="flex flex-col gap-4 mb-5">
              <div>
                <Field
                  name="full_name"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:outline-none"
                />
                <ErrorMessage
                  name="full_name"
                  component="div"
                  className="text-sm text-red-600 pt-1"
                />
              </div>
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
                  className="text-sm text-red-600 pt-1"
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600 pt-1"
                />
              </div>
              {apiError && (
                <div className="text-sm text-red-600 text-center">
                  {apiError}
                </div>
              )}

              <button
                type={"submit"}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md shadow"
              >
                REGISTER WITH EMAIL
              </button>
            </Form>
          </Formik>
        ) : (
          <button
            type={"button"}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md shadow"
            onClick={registerEmail}
          >
            REGISTER WITH EMAIL
          </button>
        )}
      </>
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("register")}
          className={`cursor-pointer w-1/2 py-3 text-center font-semibold ${activeTab === "register"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
            }`}
        >
          REGISTER
        </button>
        <button
          onClick={() => setActiveTab("login")}
          className={`cursor-pointer w-1/2 py-3 text-center font-semibold ${activeTab === "login"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
            }`}
        >
          LOGIN
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Social buttons */}
        {activeTab === "login" ? loginButtons() : registerButtons()}

        {/* Forgot password */}
        <p className="mt-4 text-sm text-center text-gray-500">
          Forgot password? Click{" "}
          <Link
            href="/recover-password"
            className="text-pink-600 hover:underline"
          >
            here
          </Link>{" "}
          to reset password.
        </p>
      </div>
    </div>
  );
}
