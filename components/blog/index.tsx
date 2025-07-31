// components/Dropdown.tsx
import Image from "next/image";



const Blog = ({ item, classes }: any) => {
    return (

        <div key={item.id} className={`px-2 ${classes}`}>
            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition">
                <div className="relative w-full h-48">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4">
                    {item.verified && (
                        <p className="text-green-600 font-semibold text-sm mb-1">
                            ✅ VERIFIED
                        </p>
                    )}

                    <h3 className="font-bold text-md text-gray-900 mb-2">
                        {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {item.description}
                    </p>

                    <p className="text-xs text-gray-500 mb-2">By {item.author}</p>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div
                            className="bg-pink-600 h-full"
                            style={{ width: `${item.percent}%` }}
                        />
                    </div>

                    <p className="text-xs text-black font-semibold">
                        RAISED <span className="text-gray-800">{item.raised}</span>{" "}
                        <span className="text-gray-400">OF {item.goal}</span>
                    </p>
                </div>
            </div>
        </div>

    );
};
export default Blog;
