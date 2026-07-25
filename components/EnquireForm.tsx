"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  pronouns: string;
  budget: string;
  date: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  pronouns: "",
  budget: "",
  date: "",
  details: "",
};

export function EnquireForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send enquiry");

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="enquire-form-success">
        <p className="type-body">
          Thank you for your enquiry. I will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="enquire-form-heading type-details-regular spacing-24">
        ENQUIRE
      </div>
      <form className="enquire-form" onSubmit={handleSubmit}>
        <div className="enquire-form-field">
          <label htmlFor="name" className="enquire-form-label type-body-bold">
            What is your preferred name?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="[NAME]"
            className="enquire-form-input type-body"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="enquire-form-field">
          <label
            htmlFor="email"
            className="enquire-form-label type-body-bold"
          >
            What is your email?
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="[EMAIL]"
            className="enquire-form-input type-body"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="enquire-form-field">
          <label
            htmlFor="pronouns"
            className="enquire-form-label type-body-bold"
          >
            What are your pronouns?
          </label>
          <input
            id="pronouns"
            name="pronouns"
            type="text"
            placeholder="[PRONOUNS]"
            className="enquire-form-input type-body"
            value={form.pronouns}
            onChange={handleChange}
          />
        </div>

        <div className="enquire-form-field">
          <label htmlFor="budget" className="enquire-form-label type-body-bold">
            What is your budget?
          </label>
          <input
            id="budget"
            name="budget"
            placeholder="[BUDGET]"
            type="text"
            className="enquire-form-input type-body"
            value={form.budget}
            onChange={handleChange}
            required
          />
        </div>

        <div className="enquire-form-field">
          <label htmlFor="date" className="enquire-form-label type-body-bold">
            What is your preferred date?
          </label>
          <input
            id="date"
            name="date"
            placeholder="[DATE]"
            type="date"
            className="enquire-form-input type-body"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="enquire-form-field">
          <label
            htmlFor="details"
            className="enquire-form-label type-body-bold"
          >
            Please provide more details about your enquiry...
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="[DETAILS]"
            className="enquire-form-textarea type-body"
            value={form.details}
            onChange={handleChange}
            rows={6}
            required
          />
        </div>

        {error && (
          <p className="enquire-form-error type-body">
            Something went wrong sending your enquiry. Please try again.
          </p>
        )}

        <button
          type="submit"
          className="enquire-form-submit type-body-bold"
          disabled={submitting}
        >
          {submitting ? "SENDING..." : "SEND ENQUIRY"}
        </button>
      </form>
    </div>
  );
}
