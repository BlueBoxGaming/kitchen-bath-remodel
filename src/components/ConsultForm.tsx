"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  zip: string;
  projectType: "" | "kitchen" | "bath" | "both";
  timing: "" | "0-3" | "3-6" | "researching";
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  projectType: "",
  timing: "",
  message: "",
};

export function ConsultForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState(false);

  function validate(next: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!next.name.trim()) e.name = "Name is required.";
    if (!next.phone.trim()) e.phone = "Phone is required.";
    if (!next.zip.trim()) e.zip = "ZIP is required.";
    if (!next.projectType) e.projectType = "Choose a project type.";
    if (!next.timing) e.timing = "Choose a timing.";
    return e;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // Client-only success state — wire to CRM/email later. Do not pretend to send.
    console.info("[ConsultForm] submission (client only)", values);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-line bg-bg-elevated p-6" role="status">
        <h2 className="font-serif text-[28px] text-ink">Request received</h2>
        <p className="mt-4 text-[17px] leading-7 text-ink-soft">
          A designer will call during {site.hours}. Prefer to talk now?
        </p>
        <a
          href={`tel:${site.phoneTel}`}
          className="btn-primary mt-6 text-[20px]"
          data-cta="form-success-call"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-bg-elevated p-6" noValidate>
      <div className="grid gap-6">
        <div>
          <label className="field-label" htmlFor="consult-name">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="consult-name"
            name="name"
            autoComplete="name"
            className="field-input"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
          {errors.name ? <p className="mt-1 text-[14px] text-accent">{errors.name}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="consult-phone">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="consult-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            required
          />
          {errors.phone ? <p className="mt-1 text-[14px] text-accent">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="consult-email">
            Email <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="consult-email"
            name="email"
            type="email"
            autoComplete="email"
            className="field-input"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="consult-zip">
            ZIP code <span className="text-accent">*</span>
          </label>
          <input
            id="consult-zip"
            name="zip"
            autoComplete="postal-code"
            className="field-input"
            value={values.zip}
            onChange={(e) => setValues({ ...values, zip: e.target.value })}
            required
          />
          {errors.zip ? <p className="mt-1 text-[14px] text-accent">{errors.zip}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="consult-project">
            Project type <span className="text-accent">*</span>
          </label>
          <select
            id="consult-project"
            name="projectType"
            className="field-input"
            value={values.projectType}
            onChange={(e) =>
              setValues({
                ...values,
                projectType: e.target.value as FormState["projectType"],
              })
            }
            required
          >
            <option value="">Select…</option>
            <option value="kitchen">Kitchen</option>
            <option value="bath">Bath</option>
            <option value="both">Both</option>
          </select>
          {errors.projectType ? <p className="mt-1 text-[14px] text-accent">{errors.projectType}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="consult-timing">
            Timing <span className="text-accent">*</span>
          </label>
          <select
            id="consult-timing"
            name="timing"
            className="field-input"
            value={values.timing}
            onChange={(e) =>
              setValues({
                ...values,
                timing: e.target.value as FormState["timing"],
              })
            }
            required
          >
            <option value="">Select…</option>
            <option value="0-3">0–3 months</option>
            <option value="3-6">3–6 months</option>
            <option value="researching">Researching</option>
          </select>
          {errors.timing ? <p className="mt-1 text-[14px] text-accent">{errors.timing}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="consult-message">
            Message <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <textarea
            id="consult-message"
            name="message"
            rows={4}
            className="field-input min-h-[120px]"
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn-primary">
          Schedule My Free Consultation
        </button>
        <p className="text-[14px] leading-6 text-ink-soft">
          Prefer the phone?{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-accent">
            Call {site.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
