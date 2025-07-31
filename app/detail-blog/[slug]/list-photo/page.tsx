'use client';

import { GoShareAndroid } from "react-icons/go";

const ListPhoto = () => {
  const randomPhotos = Array.from({ length: 12 }).map((_, i) => ({
    url: `https://source.unsplash.com/random/400x300?sig=${i}`,
    alt: `Random photo ${i + 1}`,
  }));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Random Photo Gallery",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="list-photo-container flex flex-col justify-center items-center mx-[20%]">
      {randomPhotos.map((photo) => (
        <div key={photo.alt} className="photo-item">
          <img src={photo.url} alt={photo.alt} />
        </div>
      ))}
      <button
        onClick={handleShare}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition w-full cursor-pointer flex items-center justify-center gap-2"
      >
        <GoShareAndroid className="text-lg" />
        Share
      </button>
    </div>
  );
};

export default ListPhoto;
