import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel: string;
  children: ReactNode;
}

function Form({ submitLabel, children, ...props }: FormProps) {
  return (
    <form className="grid gap-4 pt-4" {...props}>
      {children}
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button type="submit">{submitLabel}</Button>
      </DialogFooter>
    </form>
  );
}

export default Form;
