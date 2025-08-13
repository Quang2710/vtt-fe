import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetcher } from "@/libs/fetcher";

type Member = {
  member_id: number;
  full_name: string;
  email: string;
  avatar_id: string;
  total_amount: number;
};

function getAvatarUrl(avatar_id: string) {
  return `https://api.example.com/avatar/${avatar_id}`;
}

export default function MeetOurGivers() {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetcher("/donations/get-list-member")
      .then((res) => {
        if (res.Members) setMembers(res.Members);
      })
      .catch(() => setMembers([]));
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-12 bg-gradient-to-br from-[#00b49b] via-[#f9fafc] to-[#fceabb]">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 drop-shadow-2xl animate-fade-in p-2">Meet our givers</h2>
      <div className="flex gap-12 flex-wrap justify-center">
        {members.map((member) => (
          <div
            key={member.member_id}
            className="flex flex-col items-center cursor-pointer bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-8 transition-transform hover:-translate-y-3 hover:scale-105 hover:shadow-pink-200 relative group animate-fade-in"
            onClick={() => router.push(`/profile/${member.member_id}`)}
            style={{ minWidth: 200 }}
          >
            <div className="relative mb-2">
              <div className="absolute inset-0 rounded-full blur-lg opacity-60 z-0 bg-pink-400 animate-glow"></div>
              <Image
                src={getAvatarUrl(member.avatar_id)}
                alt={member.full_name}
                width={110}
                height={110}
                className="rounded-full border-4 border-pink-400 group-hover:border-yellow-400 shadow-xl object-cover transition-all duration-300 group-hover:scale-110 relative z-10"
              />
            </div>
            <div className="mt-4 text-xl font-bold text-[#222] group-hover:text-pink-500 transition-colors duration-200 text-center drop-shadow-md">{member.full_name}</div>
            <div className="text-sm text-gray-500 mt-1">Total donated: {member.total_amount.toLocaleString()}₫</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          from { opacity: 0.4; }
          to { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
