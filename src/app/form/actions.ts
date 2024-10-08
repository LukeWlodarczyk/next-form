"use server";

import { redirect } from "next/navigation";

import { validateCandidateForm } from "./validation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const sendApplicationForm = async (_: unknown, formData: FormData) => {
  await sleep();

  const submission = validateCandidateForm(formData);

  if (submission.status !== "success") return submission.reply();

  redirect("/form/success");
};
