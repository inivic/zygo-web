"use client";

import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState, FormEvent } from "react";
import { dict, type Lang } from "@/lib/i18n";

export function Hero({ lang = "es" }: { lang?: Lang }) {
  const t = dict[lang];
  const [hovering, setHovering] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const endpoint =
        process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ||
        "https://bot.zygoclub.com/api/waitlist";
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative h-svh flex flex-col items-center justify-center">
      <GL hovering={hovering} />

      <div
        id="waitlist"
        className="relative text-center px-4 -mt-12 sm:-mt-16 md:-mt-20"
      >
        <Pill className="mb-6">{t.pill}</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          {t.h1a} <br />
          <i className="font-light">{t.h1b}</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[480px] mx-auto">
          {t.sub}
        </p>

        {status === "success" ? (
          <p className="font-mono text-sm text-primary mt-10">{t.success}</p>
        ) : (
          <form
            onSubmit={onSubmit}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-[460px] mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="flex-1 h-12 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm font-mono text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary/60 focus:bg-white/10 transition-colors"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? t.submitting : t.submit}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="font-mono text-xs text-red-400/80 mt-4">{t.error}</p>
        )}
      </div>
    </div>
  );
}
