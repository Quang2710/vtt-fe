import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gray-100">
      <div className="contact-page bg-white p-8 pt-2 rounded-[16px] shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#eb008c] mb-4 text-center">
          Contact Support
        </h1>
        <p className="text-[16px] text-[#666] mb-6 text-center">
          If you have any questions or need assistance, please fill out the form
          below or reach out to our support team.
          <br />
          We are here to help you!
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#eb008c] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#eb008c] transition"
          />
          <textarea
            placeholder="How can we help you?"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#eb008c] transition resize-none"
          />
          <button
            type="submit"
            className="bg-[#eb008c] text-white font-semibold py-3 rounded-lg hover:bg-[#c20074] transition text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
