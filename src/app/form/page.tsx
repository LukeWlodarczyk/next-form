"use client";

import { useFormState } from "react-dom";
import {
  useForm,
  getFieldsetProps,
  getInputProps,
  getFormProps,
} from "@conform-to/react";

import SubmitFormButton from "@/components/SubmitFormButton";

import { sendApplicationForm } from "./actions";
import { useForm } from "@conform-to/react";
import { validateCandidateForm } from "./validation";

export default function Form() {
  const [lastResult, action] = useFormState(sendApplicationForm, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate: ({ formData }) => validateCandidateForm(formData),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        {...getFormProps(form)}
        action={action}
        className="flex flex-col items-center"
      >
        <input
          className="mt-4 p-2 rounded"
          placeholder="Maja Seger"
          {...getInputProps(fields.fullName, { type: "text" })}
          {...getFieldsetProps(fields.fullName)}
        />
        <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
        <input
          className="mt-4 p-2 rounded"
          placeholder="majaseger@gmail.com"
          {...getInputProps(fields.email, { type: "email" })}
          {...getFieldsetProps(fields.email)}
        />
        <p className="text-red-500 text-sm">{fields.email.errors}</p>
        <input
          className="mt-4 p-2 rounded"
          {...getInputProps(fields.phone, { type: "tel" })}
          {...getFieldsetProps(fields.phone)}
          placeholder="999999999"
        />
        <p className="text-red-500 text-sm">{fields.phone.errors}</p>
        <SubmitFormButton>Submit</SubmitFormButton>
      </form>
    </main>
  );
}
