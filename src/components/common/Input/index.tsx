import { Input as InputUI } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string[];
}

function Input({ label, errors, name, type, required, className, ...props }: InputProps) {
  return (
    <FormGroup>
      {label && (
        <div className="flex">
          <Label htmlFor={name}>
            {label} {required && <span className="text-red-400">(*)</span>}{" "}
          </Label>
        </div>
      )}
      <InputUI type={type || "text"} id={name} name={name} {...props} />
      {errors && (
        <div>
          {errors.map((error) => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
        </div>
      )}
    </FormGroup>
  );
}

export default Input;
