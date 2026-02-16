import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-brand transition-colors duration-200 cursor-pointer font-[family-name:var(--font-inter)] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-12 flex-1 w-full">
        <h1 className="font-[family-name:var(--font-inter)] font-black text-3xl text-ink mb-8 tracking-tight">
          {title}
        </h1>
        <div className="prose prose-slate max-w-none [&_h2]:font-[family-name:var(--font-inter)] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h3]:font-[family-name:var(--font-inter)] [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:font-[family-name:var(--font-inter)] [&_p]:text-ink-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-[15px] [&_a]:text-brand [&_a]:underline [&_a]:hover:text-brand-dark [&_ul]:text-ink-secondary [&_ul]:space-y-1 [&_ul]:mb-4 [&_li]:leading-relaxed [&_li]:font-[family-name:var(--font-inter)] [&_li]:text-[15px] [&_strong]:text-ink [&_hr]:border-slate-100 [&_hr]:my-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
