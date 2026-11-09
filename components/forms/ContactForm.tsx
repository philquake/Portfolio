"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { buttonClass } from "@/components/ui/Button";
import { budgetRanges, projectTypes } from "@/data/services";
import { site } from "@/data/site";
import { type MessageInput, messageSchema } from "@/lib/validation";

const field = "mt-2 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-fg placeholder:text-muted focus:border-accent";
const label = "block text-sm font-medium";
const errorText = "mt-1.5 text-sm text-red-600 dark:text-red-400";

/** Shown when sending fails, so a visitor always has another way to reach out. */
function Fallback() {
  return site.email ? (
    <>
      You can email me directly at{" "}
      <a href={`mailto:${site.email}`} className="underline">
        {site.email}
      </a>
      .
    </>
  ) : (
    <>
      You can reach me on{" "}
      <a href={site.github} className="underline">
        GitHub
      </a>{" "}
      instead.
    </>
  );
}

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "inquiry" }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageInput>({ resolver: zodResolver(messageSchema) });

  async function onSubmit(data: MessageInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-accent bg-surface p-6">
        <CheckCircle2 className="size-6 text-accent" aria-hidden="true" />
        <p className="mt-3 font-semibold">Message sent</p>
        <p className="mt-1 text-muted">Thank you. I will reply as soon as I can.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm text-accent underline">
          Send another message
        </button>
      </div>
    );
  }

  const invalid = (name: keyof MessageInput) =>
    errors[name] ? { "aria-invalid": true, "aria-describedby": `${variant}-${name}-error` } : {};
  const error = (name: keyof MessageInput) =>
    errors[name] && (
      <p id={`${variant}-${name}-error`} className={errorText}>
        {errors[name]?.message}
      </p>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-name`} className={label}>
            Name
          </label>
          <input id={`${variant}-name`} autoComplete="name" className={field} {...register("name")} {...invalid("name")} />
          {error("name")}
        </div>
        <div>
          <label htmlFor={`${variant}-email`} className={label}>
            Email
          </label>
          <input
            id={`${variant}-email`}
            type="email"
            autoComplete="email"
            className={field}
            {...register("email")}
            {...invalid("email")}
          />
          {error("email")}
        </div>
      </div>

      {variant === "inquiry" && (
        <>
          <div>
            <label htmlFor="inquiry-business" className={label}>
              Business name <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id="inquiry-business" autoComplete="organization" className={field} {...register("business")} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="inquiry-type" className={label}>
                Type of project
              </label>
              <select id="inquiry-type" className={field} {...register("projectType")}>
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="inquiry-budget" className={label}>
                Budget range
              </label>
              <select id="inquiry-budget" className={field} {...register("budget")}>
                {budgetRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor={`${variant}-message`} className={label}>
          {variant === "inquiry" ? "Project description" : "Message"}
        </label>
        <textarea id={`${variant}-message`} rows={6} className={field} {...register("message")} {...invalid("message")} />
        {error("message")}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

      {status === "error" && (
        <p role="alert" className="rounded-md border border-line bg-surface p-4 text-sm">
          Your message could not be sent from this form. <Fallback />
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className={buttonClass("primary", "disabled:opacity-60")}>
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Sending…" : variant === "inquiry" ? "Send inquiry" : "Send message"}
      </button>
    </form>
  );
}
