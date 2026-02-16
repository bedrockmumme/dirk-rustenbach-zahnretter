import Image from "next/image";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "1000+", label: "Zufriedene Patienten" },
  { value: "5000+", label: "Zähne gerettet" },
];

export function Stats() {
  return (
    <section className="mt-8 mb-6" aria-label="Statistiken">
      <div className="bg-gradient-to-br from-slate-50 to-brand-subtle/50 rounded-2xl p-6 border-solid border-2 border-brand/15 shadow-sm shadow-brand/5">
        {/* Zahn icon with blue background */}
        <div className="flex justify-center mb-4">
          <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-sm shadow-brand/20">
            <Image
              src="/zahn-icon.png"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-inter)] font-black text-2xl sm:text-3xl text-brand tracking-tight">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-medium text-ink-muted text-[11px] sm:text-xs mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
