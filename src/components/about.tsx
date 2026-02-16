export function About() {
  return (
    <section className="mb-8 -mt-2" aria-label="Über mich">
      <div className="bg-gradient-to-br from-slate-50 to-brand-subtle/50 rounded-2xl p-6 border-solid border-2 border-brand/15 shadow-sm shadow-brand/5">
        <h2 className="font-[family-name:var(--font-inter)] font-bold text-base text-ink mb-2 tracking-tight">
          Wer ich bin
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-ink-secondary text-[15px] leading-relaxed">
          Zahnarzt aus Leidenschaft. Spezialisiert darauf, Zähne zu retten,
          die andere aufgeben würden. Auf Social Media rede ich Klartext:
          Keine Floskeln, keine leeren Versprechen. Einfach ehrliche
          Zahnmedizin, verständlich erklärt.
        </p>
      </div>
    </section>
  );
}
