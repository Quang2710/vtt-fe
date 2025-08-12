import React, { useState } from "react";
import { useUserStore } from "@/stores/userStore";
import { fetcher } from "@/libs/fetcher";

const Settings = () => {
    const user = useUserStore((state: any) => state.user);

    const [form, setForm] = useState({
        full_name: user?.full_name || "",
        email: user?.email || "",
        profileUrl: user?.my_profile_url || "",
        bio: user?.description || "",
        currentPassword: "",
        newPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setLoading(true);
        setApiError("");
        setMessage("");
        try {
            const token =
                typeof window !== "undefined"
                    ? (document.cookie.match(/(^| )token=([^;]+)/)?.[2] ||
                        localStorage.getItem("token"))
                    : "";

            if (form.currentPassword && form.newPassword) {
                await fetcher("/auth/reset-password", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: token,
                        password: form.currentPassword,
                        new_password: form.newPassword,
                    }),
                });
            }

            await fetcher("/user/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    full_name: form.full_name,
                    password: form.currentPassword,
                    new_password: form.newPassword,
                    email: form.email,
                    description: form.bio,
                    my_profile_url: form.profileUrl,
                }),
            });

            const updatedUser = {
                ...user,
                full_name: form.full_name,
                email: form.email,
                my_profile_url: form.profileUrl,
                description: form.bio,
            };
            useUserStore.getState().setUser(updatedUser);
            localStorage.setItem("userInfo", JSON.stringify(updatedUser));
            setMessage("Update profile success!");
        } catch (err: any) {
            setApiError(err.message || "Could not save");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full ">
            <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-8 flex gap-10">
                <div className="w-[50%] flex flex-col gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-[#333] mb-4">Account</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#333] mb-1">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="full_name"
                                value={form.full_name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#333] mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333]"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#333] mb-4">
                            Change Password
                        </h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#333] mb-1">
                                Current password
                            </label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={form.currentPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#333] mb-1">
                                New password
                            </label>
                            <input
                                type="password"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333]"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={loading}
                        className="cursor-pointer mt-8 w-full px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-500 transition shadow-lg relative"
                    >
                        {loading ? "Saving..." : "Save Changes"}
                        {apiError && (
                            <span className="absolute left-1/2 -translate-x-1/2 -bottom-7 text-pink-600 text-sm font-medium">
                                {apiError}
                            </span>
                        )}
                        {message && (
                            <span className="absolute left-1/2 -translate-x-1/2 -bottom-7 text-green-600 text-sm font-medium">
                                {message}
                            </span>
                        )}
                    </button>
                </div>
                <div className="w-[50%] flex flex-col items-center gap-6">
                    <div className="w-full flex flex-col items-center">
                        <div className="relative">
                            <img
                                src={user?.avatar_id || "/avatar.jpg"}
                                alt="Profile pic"
                                className="w-24 h-24 rounded-full border-2 border-[#ede9f7] object-cover shadow"
                            />
                            <label className="absolute bottom-0 right-0 bg-[#333] text-white px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer hover:bg-[#6c4edb] transition">
                                Change Pic
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    disabled
                                />
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-[#333] mb-1">
                            Your bio
                        </label>
                        <textarea
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333] resize-none"
                            placeholder="Write something about yourself..."
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-[#333] mb-1">
                            Your profile URL
                        </label>
                        <input
                            type="text"
                            name="profileUrl"
                            value={form.profileUrl}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f7f7f7] focus:outline-none focus:border-[#333]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-8 flex gap-10 my-4">
                <div className="w-full flex flex-col gap-6">
                    <h2 className="text-xl font-bold text-[#333] mb-2">Manage email notifications</h2>
                    <div className="flex flex-col gap-4">
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="recommended_campaigns"
                                className="mt-1 accent-pink-600"
                            />
                            <span>
                                <span className="font-semibold text-[#333]">Recommended Campaigns</span><br />
                                <span className="text-[#999] text-sm">Sometimes, we will recommend campaigns that you might be interested to support.</span>
                            </span>
                        </label>
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="donation_milestones"
                                className="mt-1 accent-pink-600"
                            />
                            <span>
                                <span className="font-semibold text-[#333]">Donation Milestones</span><br />
                                <span className="text-[#999] text-sm">We will occasionally congratulate you on your donation milestones and get your feedback about your experience as a Giver.</span>
                            </span>
                        </label>
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="chat_notifications"
                                className="mt-1 accent-pink-600"
                            />
                            <span>
                                <span className="font-semibold text-[#333]">Chat email notifications</span><br />
                                <span className="text-[#999] text-sm">Notifications to your messages in campaign chatrooms you have participated in.</span>
                            </span>
                        </label>
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="campaign_updates"
                                className="mt-1 accent-pink-600"
                            />
                            <span>
                                <span className="font-semibold text-[#333]">Campaign updates</span><br />
                                <span className="text-[#999] text-sm">Updates from the campaigns that you have supported.</span>
                            </span>
                        </label>
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="matchup_emails"
                                className="mt-1 accent-pink-600"
                            />
                            <span>
                                <span className="font-semibold text-[#333]">MatchUp emails</span><br />
                                <span className="text-[#999] text-sm">Updates from givers that choose you as their impact matcher.</span>
                            </span>
                        </label>
                    </div>
                    <button
                        type="button"
                        className="cursor-pointer mt-6 w-[50%] px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-600 transition shadow-lg "
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Settings;