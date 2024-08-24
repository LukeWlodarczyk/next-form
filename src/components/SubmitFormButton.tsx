"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  pendingText?: string;
  children: React.ReactNode;
};

const SubmitFormButton: FC<Props> = ({
  children,
  pendingText = "Submitting...",
}) => {
  const { pending } = useFormStatus();

  return (
    <button className="text-white">{pending ? pendingText : children}</button>
  );
};

export default SubmitFormButton;
