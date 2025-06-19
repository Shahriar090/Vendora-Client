/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type Control } from "react-hook-form";
import type { TFormWrapper } from "./form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { type ReactElement } from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";

const FormWrapper = ({
  schema,
  defaultValues,
  onSubmit,
  children,
  submitButtonLabel = "Submit",
  submitButtonDisabled = false,
}: TFormWrapper<any>) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  // Auto-inject control prop into InputField components.
  // This helps avoid manually adding the `control` prop to every input field.
  // Now, I don’t need to manually pass `control` to each <InputField /> (e.g., <InputField control={form.control} />).

  const enhanceChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child; // Ignore non-element nodes (e.g., strings, null, etc.)
      }

      // Check if this is an InputField component
      // if (
      //   (child.type && (child.type as any).name === "InputField") ||
      //   (child.type as any).displayName === "InputField"
      // ) {
      //   // Inject the `control` from useForm
      //   return React.cloneElement(child, {
      //     ...(child.props as any),
      //     control: form.control,
      //   });
      // }
      const props = child.props as { name?: string; control?: Control<any> };
      if ("name" in props) {
        return React.cloneElement(child as ReactElement<any>, {
          ...props,
          control: form.control,
        });
      }

      // Recursively enhance nested children if present
      if ((child.props as any)?.children) {
        return React.cloneElement(child, {
          ...(child.props as any),
          children: enhanceChildren((child.props as any).children),
        });
      }

      return child;
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {enhanceChildren(children)}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={submitButtonDisabled}
            className="bg-[var(--color-red)] border-0 rounded-xs text-[var(--color-white)]"
          >
            {submitButtonLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormWrapper;
