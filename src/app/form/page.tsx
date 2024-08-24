"use client";

import SubmitFormButton from "@/components/SubmitFormButton";
import { sendApplicationForm } from "@/actions/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={sendApplicationForm} className="flex flex-col items-center">
        <input className="mb-4 p-2 rounded" type="text" name="fullName" />
        <input className="mb-4 p-2 rounded" type="email" name="email" />
        <input className="mb-4 p-2 rounded" type="phone" name="phone" />
        <SubmitFormButton>Submit</SubmitFormButton>
      </form>
    </main>
  );
}
