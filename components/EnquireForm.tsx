"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  budget: string;
  date: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  budget: "",
  date: "",
  details: "",
};

export function EnquireForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
        <label htmlFor="details" className="enquire-form-label type-body-bold">
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

      <button type="submit" className="enquire-form-submit type-body-bold">
        SEND ENQUIRY
      </button>
    </form>
  );
}
