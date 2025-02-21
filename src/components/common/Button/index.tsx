import { Button as ButtonUI, ButtonProps as ButtonUIProps } from "@/components/ui/button";
import { PropsWithChildren } from "react";

interface ButtonProps extends ButtonUIProps, PropsWithChildren {}

function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonUI className="rounded-xl" size="sm" {...props}>
      {children}
    </ButtonUI>
  );
}

export default Button;
