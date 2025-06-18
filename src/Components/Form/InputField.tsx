/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldValues } from "react-hook-form";
import type { TInputField } from "./form.types";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  options = [],
  isVisible = true,
  multipleFiles = false,
  onChange,
  required = false,
}: TInputField<T>) => {
  if (!isVisible) return;

  if (!control) {
    console.warn(
      `InputField "${name}" is missing control prop. Make sure it's used within FormWrapper.`
    );
    return null;
  }

  const renderInput = (field: any) => {
    const handleChange = (value: any) => {
      field.onChange(value);
      if (onChange) onChange(value);
    };

    switch (type) {
      case "textarea":
        return <Textarea {...field} placeholder={placeholder} />;

      case "file":
        return (
          <Input
            type="file"
            multiple={multipleFiles}
            onChange={(e) => {
              if (e.target?.files) {
                const files = Array.from(e.target.files);
                const fileArray = multipleFiles ? files : [files[0]];
                const existingFiles = field.value || [];
                const updatedFiles = [...existingFiles, ...fileArray];
                console.log(updatedFiles);
                handleChange(updatedFiles);
              }
            }}
          />
        );

      case "select":
        return (
          <Select onValueChange={handleChange} value={field.value || ""}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "checkbox":
        return (
          <Checkbox
            checked={field.value ?? false}
            onCheckedChange={handleChange}
          />
        );

      case "radio":
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={() => handleChange(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case "number":
        return (
          <Input
            type="number"
            {...field}
            placeholder={placeholder}
            value={field.value === undefined ? "" : field.value}
            onChange={(e) => {
              const newValue =
                e.target.value === "" ? "" : Number(e.target.value);
              handleChange(newValue);
            }}
          />
        );

      default:
        return (
          <Input
            type={type}
            {...field}
            placeholder={placeholder}
            value={field.value ?? ""}
            onChange={(e) => handleChange(e.target.value)}
          />
        );
    }
  };
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInput(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
