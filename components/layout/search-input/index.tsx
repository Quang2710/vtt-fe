import { Search } from "lucide-react"; // or use any icon lib you prefer

export default function SearchInput({ className }: { className?: string }) {
    return (
        <div className={`relative w-1/2 ${className}`}>
            <input
                type="text"
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
        </div>
    );
}
