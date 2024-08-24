"use client";

import { useFormState } from "react-dom";

import SubmitFormButton from "@/components/SubmitFormButton";
import { sendApplicationForm } from "./actions";

export default function Form() {
  const [error, action] = useFormState(sendApplicationForm, "");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={action} className="flex flex-col items-center">
        <input className="mb-4 p-2 rounded" type="text" name="fullName" />
        <input className="mb-4 p-2 rounded" type="email" name="email" />
        <input className="mb-4 p-2 rounded" type="phone" name="phone" />
        <SubmitFormButton>Submit</SubmitFormButton>
        {Boolean(error) && <p className="text-rose-600 mt-4">{error}</p>}
      </form>
    </main>
  );
}
