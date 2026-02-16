import { Instagram, Youtube, Facebook, Globe, Calendar, ChevronRight } from "lucide-react";
import { TikTokIcon } from "@/components/icons/tiktok";
import { type ReactNode } from "react";

interface LinkTreeItemProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  href: string;
  variant?: "default" | "cta";
}

function LinkTreeItem({
  icon,
  iconBg,
  title,
  subtitle,
  href,
  variant = "default",
}: LinkTreeItemProps) {
  const isCta = variant === "cta";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center gap-4 rounded-2xl p-4 cursor-pointer
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
        active:scale-[0.98]
        ${
          isCta
            ? "bg-brand text-white shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:bg-brand-dark"
            : "bg-white border-solid border border-slate-100 shadow-sm hover:shadow-md hover:border-brand/20 hover:-translate-y-0.5"
        }
      `}
      aria-label={`${title} — ${subtitle}`}
    >
      <div
        className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
          isCta ? "bg-white/20" : iconBg
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-[family-name:var(--font-inter)] font-semibold text-[15px]">
          {title}
        </p>
        <p
          className={`font-[family-name:var(--font-inter)] font-normal text-[13px] ${
            isCta ? "text-white/75" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <ChevronRight
        className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
          isCta ? "text-white/60" : "text-ink-muted/50"
        }`}
      />
    </a>
  );
}

const socialLinks: LinkTreeItemProps[] = [
  {
    icon: <TikTokIcon className="w-5 h-5 text-white" />,
    iconBg: "bg-gray-900",
    title: "TikTok",
    subtitle: "@dirkrustenbach",
    href: "https://tiktok.com/@dirkrustenbach",
  },
  {
    icon: <Instagram className="w-5 h-5 text-white" />,
    iconBg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    title: "Instagram",
    subtitle: "@dirk.rustenbach",
    href: "https://instagram.com/dirk.rustenbach",
  },
  {
    icon: <Youtube className="w-5 h-5 text-white" />,
    iconBg: "bg-red-600",
    title: "YouTube",
    subtitle: "@dirkrustenbach",
    href: "https://youtube.com/@dirkrustenbach",
  },
  {
    icon: <Facebook className="w-5 h-5 text-white" />,
    iconBg: "bg-blue-600",
    title: "Facebook",
    subtitle: "@dirkrustenbach",
    href: "https://www.facebook.com/profile.php?id=61586556925695",
  },
];

const actionLinks: LinkTreeItemProps[] = [
  {
    icon: <Globe className="w-5 h-5 text-white" />,
    iconBg: "bg-brand",
    title: "Praxis-Website",
    subtitle: "zahnarzt-braunschweig.de",
    href: "https://www.zahnarzt-braunschweig.de/",
  },
  {
    icon: <Calendar className="w-5 h-5 text-white" />,
    iconBg: "",
    title: "Termin buchen",
    subtitle: "Online einen Termin vereinbaren",
    href: "#",
    variant: "cta",
  },
];

export function LinkTree() {
  return (
    <section aria-label="Links">
      <h2 className="sr-only">Meine Links</h2>
      <div className="space-y-3">
        {socialLinks.map((link) => (
          <LinkTreeItem key={link.title} {...link} />
        ))}

        {/* Visual separator */}
        <div className="flex items-center gap-3 py-1">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-ink-muted text-xs font-medium uppercase tracking-widest">
            Praxis
          </span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {actionLinks.map((link) => (
          <LinkTreeItem key={link.title} {...link} />
        ))}
      </div>
    </section>
  );
}
