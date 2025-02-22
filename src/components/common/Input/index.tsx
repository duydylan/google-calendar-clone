import { Input as InputUI } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string[];
}

function Input({ label, errors, name, type, className, ...props }: InputProps) {
  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
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
