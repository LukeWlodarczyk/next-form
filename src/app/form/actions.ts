"use server";

import { redirect } from "next/navigation";

import { Application } from "./validation";
import { ApplicationType } from "./types";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const sendApplicationForm = async (
  state: string,
  formData: FormData
) => {
  const { success } = Application.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  if (!success) {
    return "Something went wrong";
  }

  console.log(success);
  await sleep();
  console.log(formData);
  redirect("/form/success");
};
