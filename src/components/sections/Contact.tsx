"use client";

import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Please enter a valid email address.";
  if (fields.subject.trim().length < 3) errors.subject = "Add a short subject.";
  if (fields.message.trim().length < 20)
    errors.message = "Tell me a little more — at least 20 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  /**
   * Opens the visitor's mail client with the message pre-filled — no backend
   * required. To use a service instead, POST `fields` to your own API route here.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `${fields.message}\n\n—\n${fields.name}\n${fields.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      fields.subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setFields(empty);
  }

  return (
    <Section id="contact" muted>
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="I'm currently open to full-time and contract roles. Send a note about your team or project and I'll reply within a day or two."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal from="left" className="space-y-4">
          {details.map((detail) => {
            const content = (
              <>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <detail.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted uppercase">
                    {detail.label}
                  </span>
                  <span className="block truncate text-sm font-medium">{detail.value}</span>
                </span>
              </>
            );

            return detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-accent/40"
              >
                {content}
              </a>
            ) : (
              <div
                key={detail.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"
              >
                {content}
              </div>
            );
          })}
        </Reveal>

        <Reveal from="right">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-background p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={fields.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
                placeholder="Jane Doe"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={fields.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                placeholder="jane@company.com"
              />
            </div>

            <div className="mt-5">
              <Field
                id="subject"
                label="Subject"
                value={fields.subject}
                error={errors.subject}
                onChange={(value) => update("subject", value)}
                placeholder="React Native role at ..."
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={fields.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="A little about the role, team, and timeline…"
                aria-invalid={Boolean(errors.message)}
                className={cn(inputClass, "resize-y", errors.message && "border-red-500")}
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg">
                Send message
                <Send className="size-4" />
              </Button>
              {sent ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400">
                  <Check className="size-4" />
                  Your mail client should be open — thanks!
                </span>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

type FieldProps = {
  id: keyof Fields;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({ id, label, value, error, placeholder, type = "text", onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        className={cn(inputClass, error && "border-red-500")}
      />
      {error ? <p className="mt-1.5 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
