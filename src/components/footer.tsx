import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative mt-8">
      {/* Wave divider — outside overflow-hidden to prevent clipping */}
      <div className="relative z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: "40px" }} preserveAspectRatio="none">
          <path d="M0 55C240 5 480 5 720 35C960 65 1200 65 1440 55V0H0Z" fill="#ffffff" />
          <path d="M0 55C240 5 480 5 720 35C960 65 1200 65 1440 55V60H0Z" fill="#03BFFF" />
          <rect x="0" y="55" width="1440" height="5" fill="#03BFFF" />
        </svg>
        <div className="bg-brand h-[1px] -mt-[1px]" />
      </div>

      {/* Blue footer area */}
      <div className="relative bg-brand overflow-hidden -mt-[1px]">
        {/* Background effects matching hero */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-[15%] w-28 h-28 bg-white/10 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-4 right-[10%] w-20 h-20 bg-brand-light/20 rounded-full blur-xl animate-pulse-soft" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative max-w-md mx-auto px-6 py-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-7 h-7 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Image
                src="/zahn-icon.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="font-[family-name:var(--font-inter)] font-medium text-white/80 text-sm">
            &copy; 2026 Dirk Rustenbach &middot; Der Zahnretter
          </p>
          <div className="flex justify-center gap-4 mt-3 text-[13px]">
            <Link
              href="/impressum"
              className="font-[family-name:var(--font-inter)] text-white/60 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:underline"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-[family-name:var(--font-inter)] text-white/60 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:underline"
            >
              Datenschutz
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-4 font-[family-name:var(--font-inter)]">
            Webdesign von{" "}
            <a
              href="https://mummentum.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 cursor-pointer underline"
            >
              mummentum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
