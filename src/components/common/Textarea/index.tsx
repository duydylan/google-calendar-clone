import { Label } from "@/components/ui/label";
import { Textarea as TextareaUI } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errors?: string[];
}

function Textarea({ label, errors, name, ...props }: TextareaProps) {
  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextareaUI id={name} name={name} {...props} />
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

export default Textarea;
