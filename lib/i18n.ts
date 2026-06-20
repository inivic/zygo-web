export type Lang = "es" | "en";

export const dict = {
  es: {
    htmlLang: "es",
    metaTitle: "Zygo — El asistente personal a tu alcance",
    metaDesc:
      "Cuéntale tu vida por Telegram como a un colega y deja de apuntar cosas en notas que no abres jamás. Gym, gastos, recordatorios — se encarga él.",
    headerCta: "Quiero plaza",
    pill: "BETA PRIVADA · PLAZAS LIMITADAS",
    h1a: "El asistente personal",
    h1b: "a tu alcance",
    sub: "Tienes 14 apps para organizarte y no usas ninguna. Zygo vive en tu Telegram: le sueltas «gasté 30 pavos», «hoy gym», «recuérdame el martes»… y ya está. Lo ordena él, no tú.",
    emailPlaceholder: "tu@email.com",
    submit: "Quiero plaza",
    submitting: "Enviando…",
    success: "Dentro. Te escribimos cuando haya hueco — no nos llames tú ✦",
    error: "Algo ha fallado. Inténtalo de nuevo.",
  },
  en: {
    htmlLang: "en",
    metaTitle: "Zygo — Your personal assistant, within reach",
    metaDesc:
      "Tell it your life on Telegram like a mate and stop jotting things in notes you never open. Gym, money, reminders — it handles it.",
    headerCta: "Get a spot",
    pill: "PRIVATE BETA · LIMITED SPOTS",
    h1a: "Your personal assistant,",
    h1b: "within reach",
    sub: "You've got 14 apps to get organized and use none of them. Zygo lives in your Telegram: drop it «spent 30 quid», «gym today», «remind me Tuesday»… done. It sorts it out, not you.",
    emailPlaceholder: "you@email.com",
    submit: "Get a spot",
    submitting: "Joining…",
    success: "You're in. We'll ping you when there's room — don't call us ✦",
    error: "Something went wrong. Please try again.",
  },
} satisfies Record<Lang, Record<string, string>>;
