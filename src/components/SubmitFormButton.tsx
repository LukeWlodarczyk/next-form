"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  loading?: string;
  children: React.ReactNode;
};

const SubmitFormButton: FC<Props> = ({
  children,
  loading = "Submitting...",
}) => {
  const { pending } = useFormStatus();

  return <button className="text-white">{pending ? loading : children}</button>;
};

export default SubmitFormButton;
