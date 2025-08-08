import { fetcher } from "@/libs/fetcher";
import React, { useState } from "react";

const HelpContact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    content: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);

    try {
      await fetcher("/setting/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: "", subject: "", email: "", content: "" });
      showToast("Your message has been sent!", "success");
    } catch (err) {
      setError("Could not send. Please try again.");
      showToast("Could not send. Please try again.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-container p-5 flex flex-col items-center">
      {toast && (
        <div
          className={`fixed bottom-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg font-semibold text-base transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}
      <div className="flex flex-col items-center bg-gradient-to-br from-[#f7f7fa] via-[#ede9f7] to-[#e5e7eb] rounded-xl shadow-sm py-3 px-4 w-full max-w-[340px] mb-2">
        <div className="relative mb-2">
          <img
            src="/avatar.jpg"
            alt="Support Avatar"
            className="w-16 h-16 rounded-full shadow-md border-2 border-[#e5e7eb] object-cover"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#4b3299] border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-bold">?</span>
        </div>
        <div className="font-bold text-lg text-[#4b3299] leading-tight mb-1">How can we help?</div>
        <div className="text-xs text-[#888] mb-1">We usually respond in a few hours</div>
      </div>
      <form className="flex flex-col gap-2 w-full max-w-[340px]" onSubmit={handleSubmit}>
        <label htmlFor="contact-name" className="text-sm font-medium text-[#4b3299] mb-1">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] text-base focus:outline-none focus:border-[#4b3299] transition-all duration-200"
          required
        />
        <label htmlFor="contact-subject" className="text-sm font-medium text-[#4b3299] mb-1">Subject</label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is your message about?"
          className="px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] text-base focus:outline-none focus:border-[#4b3299] transition-all duration-200"
          required
        />
        <label htmlFor="contact-email" className="text-sm font-medium text-[#4b3299] mb-1">Email address</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] text-base focus:outline-none focus:border-[#4b3299] transition-all duration-200"
          required
        />
        <label htmlFor="contact-content" className="text-sm font-medium text-[#4b3299] mb-1">How can we help?</label>
        <textarea
          id="contact-content"
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Describe your issue or question..."
          className="px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] text-base focus:outline-none focus:border-[#4b3299] resize-none min-h-[80px] transition-all duration-200"
          required
        />
        <div className="flex w-full">
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-[#4b3299] text-white font-semibold text-base hover:bg-[#6c4edb] transition cursor-pointer shadow-lg"
            disabled={sending}
          >
            {sending ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Sending...
              </span>
            ) : "Send a message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelpContact;
