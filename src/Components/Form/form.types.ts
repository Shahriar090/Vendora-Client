/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import type { ReactNode } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

export type TFormWrapper<T> = {
  schema: z.ZodType<T, any, any>;
  defaultValues: T;
  onSubmit: (data: T) => void | Promise<void>;
  children: ReactNode;
  submitButtonLabel?: string;
  submitButtonDisabled?: boolean;
};

// input field type
export type TOption = {
  label: string;
  value: string;
};

export type TInputField<T extends FieldValues> = {
  control?: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?:
    | "text"
    | "textarea"
    | "number"
    | "password"
    | "email"
    | "file"
    | "select"
    | "checkbox"
    | "radio";
  options?: TOption[];
  isVisible?: boolean;
  multipleFiles?: boolean;
  onChange?: (value: any) => void;
  required?: boolean;
};
