import Image from "next/image";

export function Hero() {
  return (
    <div className="relative">
      <header className="relative overflow-hidden bg-brand min-h-[420px] sm:min-h-[460px] pb-[30px] sm:pb-[40px]">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand" />

          {/* Floating orbs */}
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute top-32 right-[5%] w-24 h-24 bg-brand-light/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute bottom-10 left-[20%] w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-[15%] w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative max-w-md mx-auto px-6 pt-14 pb-12 text-center">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="rounded-full w-44 h-44 sm:w-52 sm:h-52 p-[3px] bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-sm">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <Image
                    src="/profil-dirk.png"
                    alt="Dirk Rustenbach – Der Zahnretter"
                    width={208}
                    height={208}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Zahn badge */}
              <div className="absolute -bottom-1 -right-1 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center ring-2 ring-brand/30">
                <Image
                  src="/zahn-icon.png"
                  alt=""
                  width={36}
                  height={36}
                  className="w-9 h-9"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-inter)] font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight drop-shadow-sm">
            Dirk Rustenbach
          </h1>

          {/* "Der Zahnretter" — Garamond accent */}
          <p className="font-[family-name:var(--font-garamond)] italic text-2xl sm:text-3xl text-white/80 mt-2 mb-5">
            Der Zahnretter
          </p>
        </div>
      </header>

      {/* Wave divider — OUTSIDE overflow-hidden container */}
      <div className="relative -mt-[1px] z-10">
        <div className="bg-brand h-[1px]" />
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mt-[1px]" style={{ height: "40px" }} preserveAspectRatio="none">
          <rect x="0" y="0" width="1440" height="5" fill="#03BFFF" />
          <path d="M0 5C240 55 480 55 720 25C960 -5 1200 -5 1440 5V0H0Z" fill="#03BFFF" />
          <path d="M0 5C240 55 480 55 720 25C960 -5 1200 -5 1440 5V60H0Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
