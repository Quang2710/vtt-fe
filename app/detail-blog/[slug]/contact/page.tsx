import React from "react";

const Contact = () => {
  return (
    <div className="contact-page bg-white p-8 rounded-[10px] shadow mt-[20px]">
      <h1 className="text-2xl font-bold text-[#eb008c] mb-4">Contact Support</h1>
      <p className="text-[15px] text-[#666] mb-6">
        If you have any questions or need assistance, please fill out the form below or reach out to our support team. We are here to help you!
      </p>
      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#eb008c]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#eb008c]"
        />
        <textarea
          placeholder="How can we help you?"
          rows={5}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#eb008c]"
        />
        <button
          type="submit"
          className="bg-[#eb008c] text-white font-semibold py-2 rounded hover:bg-[#c20074] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
