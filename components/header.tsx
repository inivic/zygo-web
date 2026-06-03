"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { type Lang } from "@/lib/i18n";

export const Header = () => {
  const pathname = usePathname() || "/";
  const lang: Lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <div className="fixed z-50 pt-8 md:pt-12 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link href={lang === "en" ? "/en" : "/"}>
          <Logo />
        </Link>
        <div className="flex items-center gap-2 font-mono text-xs uppercase">
          <Link
            href="/"
            className={
              lang === "es"
                ? "text-foreground"
                : "text-foreground/40 hover:text-foreground/70 transition-colors"
            }
          >
            ES
          </Link>
          <span className="text-foreground/30">/</span>
          <Link
            href="/en"
            className={
              lang === "en"
                ? "text-foreground"
                : "text-foreground/40 hover:text-foreground/70 transition-colors"
            }
          >
            EN
          </Link>
        </div>
      </header>
    </div>
  );
};
