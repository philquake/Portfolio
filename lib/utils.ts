export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
