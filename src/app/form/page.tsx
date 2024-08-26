"use client";

import { useFormState } from "react-dom";

import SubmitFormButton from "@/components/SubmitFormButton";

import { sendApplicationForm } from "./actions";
import { useForm } from "@conform-to/react";
import { validateCandidateForm } from "./validation";

export default function Form() {
  const [_, action] = useFormState(sendApplicationForm, undefined);

  const [form, fields] = useForm({
    onValidate: ({ formData }) => validateCandidateForm(formData),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="flex flex-col items-center"
      >
        <input
          className="mt-4 p-2 rounded"
          type="text"
          key={fields.fullName.key}
          name={fields.fullName.name}
          defaultValue={fields.fullName.initialValue}
          placeholder="Maja Seger"
        />
        <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
        <input
          className="mt-4 p-2 rounded"
          type="email"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue}
          placeholder="majaseger@gmail.com"
        />
        <p className="text-red-500 text-sm">{fields.email.errors}</p>
        <input
          className="mt-4 p-2 rounded"
          type="tel"
          key={fields.phone.key}
          name={fields.phone.name}
          defaultValue={fields.phone.initialValue}
          placeholder="999999999"
        />
        <p className="text-red-500 text-sm">{fields.phone.errors}</p>
        <SubmitFormButton>Submit</SubmitFormButton>
      </form>
    </main>
  );
}
