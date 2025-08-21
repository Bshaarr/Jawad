import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  imageUrl: string;
  alt: string;
};

export default function ProvinceCard({ id, name, imageUrl, alt }: Props) {
  return (
    <Link
      to={`/provinces/${id}`}
      className="group relative block w-full overflow-hidden rounded-2xl bg-surface ring-1 ring-white/5 shadow-card transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-cardHover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      aria-label={`فتح صفحة محافظة ${name}`}
    >
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        className="h-48 md:h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-x-3 bottom-3">
        <span className="relative inline-flex items-center max-w-full backdrop-blur-sm bg-black/30 text-text font-extrabold tracking-wide text-lg md:text-xl px-3 py-1 rounded-xl ring-1 ring-accent/30 shadow-sm">
          <span className="truncate">{name}</span>
        </span>
      </div>
    </Link>
  );
}