"use server";

import { redirect } from "next/navigation";

export const sendApplicationForm = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(formData);
  redirect("/form/success");
};
