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

export function BookForm() {
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
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send booking request");

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="book-form-success">
        <p className="type-body">
          Thank you for your booking request. I will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="book-form-heading type-details-regular spacing-24">
        BOOK
      </div>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-form-field">
          <label htmlFor="name" className="book-form-label type-body-bold">
            What is your preferred name?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="[NAME]"
            className="book-form-input type-body"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-field">
          <label
            htmlFor="email"
            className="book-form-label type-body-bold"
          >
            What is your email?
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="[EMAIL]"
            className="book-form-input type-body"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-field">
          <label
            htmlFor="pronouns"
            className="book-form-label type-body-bold"
          >
            What are your pronouns?
          </label>
          <input
            id="pronouns"
            name="pronouns"
            type="text"
            placeholder="[PRONOUNS]"
            className="book-form-input type-body"
            value={form.pronouns}
            onChange={handleChange}
          />
        </div>

        <div className="book-form-field">
          <label htmlFor="budget" className="book-form-label type-body-bold">
            What is your budget?
          </label>
          <input
            id="budget"
            name="budget"
            placeholder="[BUDGET]"
            type="text"
            className="book-form-input type-body"
            value={form.budget}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-field">
          <label htmlFor="date" className="book-form-label type-body-bold">
            What is your preferred date?
          </label>
          <input
            id="date"
            name="date"
            placeholder="[DATE]"
            type="date"
            className="book-form-input type-body"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-field">
          <label
            htmlFor="details"
            className="book-form-label type-body-bold"
          >
            Please provide more details about your booking...
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="[DETAILS]"
            className="book-form-textarea type-body"
            value={form.details}
            onChange={handleChange}
            rows={6}
            required
          />
        </div>

        {error && (
          <p className="book-form-error type-body">
            Something went wrong sending your booking request. Please try again.
          </p>
        )}

        <button
          type="submit"
          className="book-form-submit type-body-bold"
          disabled={submitting}
        >
          {submitting ? "SENDING..." : "SEND BOOKING"}
        </button>
      </form>
    </div>
  );
}
