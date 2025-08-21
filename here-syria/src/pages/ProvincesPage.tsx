import ProvinceCard from "../components/ProvinceCard";
import { provinces } from "../data/provinces";

export default function ProvincesPage() {
  return (
    <section className="py-10" aria-labelledby="provincesHeading" dir="rtl">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-6 flex items-center justify-between">
          <h1 id="provincesHeading" className="text-2xl md:text-3xl font-extrabold text-text">
            المحافظات السورية
          </h1>
        </header>
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-6
          "
        >
          {provinces.map((p) => (
            <ProvinceCard key={p.id} id={p.id} name={p.name} imageUrl={p.imageUrl} alt={p.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}