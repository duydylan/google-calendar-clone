import { cn } from "@/lib/utils";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends NextLinkProps, PropsWithChildren {
  className?: string;
}

function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink className={cn("text-blue-500 text-[12px] underline", className)} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;
