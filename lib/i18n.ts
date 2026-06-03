export type Lang = "es" | "en";

export const dict = {
  es: {
    htmlLang: "es",
    metaTitle: "Zygo — Tu asistente proactivo en cada chat",
    metaDesc:
      "Un asistente proactivo que vive en WhatsApp, iMessage y las apps de mensajería que ya usas.",
    headerCta: "Apuntarme",
    pill: "BETA PRIVADA · LISTA DE ESPERA",
    h1a: "Tu asistente proactivo",
    h1b: "en cada chat",
    sub: "Zygo vive en WhatsApp, iMessage y las apps de mensajería que ya usas — anticipándose a lo que necesitas antes de que lo pidas.",
    emailPlaceholder: "tu@email.com",
    submit: "Apuntarme",
    submitting: "Enviando…",
    success: "¡Ya estás dentro! Te avisamos pronto ✦",
    error: "Algo ha fallado. Inténtalo de nuevo.",
  },
  en: {
    htmlLang: "en",
    metaTitle: "Zygo — Your proactive assistant on every chat",
    metaDesc:
      "A proactive assistant that lives inside WhatsApp, iMessage and the messaging apps you already use.",
    headerCta: "Join waitlist",
    pill: "PRIVATE BETA · JOIN THE WAITLIST",
    h1a: "Your proactive assistant",
    h1b: "on every chat",
    sub: "Zygo lives inside WhatsApp, iMessage and the messaging apps you already use — anticipating what you need before you ask.",
    emailPlaceholder: "you@email.com",
    submit: "Join waitlist",
    submitting: "Joining…",
    success: "You're on the list — we'll be in touch ✦",
    error: "Something went wrong. Please try again.",
  },
} satisfies Record<Lang, Record<string, string>>;
