"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const countryCodes = [
	{ code: "+84", label: "Vietnam" },
	{ code: "+65", label: "Singapore" },
	{ code: "+66", label: "Thailand" },
	{ code: "+60", label: "Malaysia" },
	{ code: "+62", label: "Indonesia" },
	{ code: "+63", label: "Philippines" },
	{ code: "+91", label: "India" },
	{ code: "+81", label: "Japan" },
	{ code: "+82", label: "South Korea" },
	{ code: "+61", label: "Australia" },
];

const PhoneNumberPage: React.FC = () => {
	const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
	const [phone, setPhone] = useState("");
	const router = useRouter();

	return (
		<div className="main-container-upload bg-[#f4f4f4]">
			<div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mb-[60px] mb-[20%] p-[40px] bg-[#f4f4f4]">
				<p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
				<div
					className="bg-white w-full mb-4 px-4 py-3 rounded-lg text-[#333] text-[14px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] break-words"
				>
					Please share with us your contact details so we can reach out to you
					regarding fundraising matters.
				</div>
				<p className="mb-2 text-[16px] font-medium text-[#333]">
					What is your phone number?
				</p>
				<div className="flex items-center gap-6 mb-6 w-full">
					<div className="w-[90px] h-[42px] bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-[0_20px_30px_0_rgba(0,0,0,0.05)]">
						<select
							className="w-full h-[42px] bg-white text-[16px] px-2 py-2 rounded-lg focus:outline-none appearance-none shadow-[0_20px_30px_0_rgba(0,0,0,0.05)]"
							value={selectedCode}
							onChange={e => setSelectedCode(e.target.value)}
						>
							{countryCodes.map(c => (
								<option key={c.code} value={c.code}>
									{c.code}
								</option>
							))}
						</select>
					</div>
					<input
						type="number"
						className="flex-1 h-[42px] bg-white rounded-lg px-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#EB008C] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)]"
						placeholder="Enter phone number"
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<button
					className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-2 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={!phone.trim()}
					onClick={() => router.push("/fundraise/new/happened")}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PhoneNumberPage;
