import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface IconWrapperProps {
  icon: ReactNode;
  tooltip: string;
}

function IconWrapper({ icon, tooltip }: IconWrapperProps) {
  return (
    <span className="cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>{icon}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
}

export default IconWrapper;
