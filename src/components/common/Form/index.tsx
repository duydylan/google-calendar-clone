import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { FormHTMLAttributes, ReactNode } from "react";
import Loader from "../Loader";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitLabel: string;
  isLoading?: boolean;
  children: ReactNode;
}

function Form({ submitLabel, isLoading, children, ...props }: FormProps) {
  return (
    <form className="grid gap-4 pt-4" {...props}>
      {children}
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <Button type="submit" aria-disabled={isLoading}>
          {isLoading ? <Loader /> : submitLabel}
        </Button>
      </DialogFooter>
    </form>
  );
}

export default Form;
