import { useParams, Link } from "react-router-dom";
import { provinces } from "../data/provinces";

export default function ProvinceDetails() {
  const { id } = useParams();
  const p = provinces.find((x) => x.id === id);

  if (!p) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-muted">لم يتم العثور على المحافظة.</p>
        <Link className="inline-block mt-4 px-4 py-2 rounded-lg bg-primary text-bg font-bold" to="/">
          ← العودة
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-12" dir="rtl">
      <div className="relative h-56 md:h-80 w-full overflow-hidden">
        <img src={p.imageUrl} alt={p.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute bottom-4 inset-x-4 text-2xl md:text-4xl font-extrabold text-text">
          {p.name}
        </h1>
      </div>

      <div className="mx-auto max-w-4xl px-4 mt-6 space-y-4">
        <p className="text-text/90 leading-8 bg-surface/60 rounded-xl p-4 ring-1 ring-white/10">
          {p.description}
        </p>
        <Link className="inline-block mt-2 px-4 py-2 rounded-lg bg-primary text-bg font-bold hover:brightness-110" to="/">
          ← العودة إلى المحافظات
        </Link>
      </div>
    </article>
  );
}