import { PropsWithChildren, ReactNode } from "react";

interface InfoItemProps extends PropsWithChildren {
  icon: ReactNode;
}

function InfoItem({ icon, children }: InfoItemProps) {
  return (
    <div className="flex items-center gap-4 text-sm">
      {icon}
      <div>{children}</div>
    </div>
  );
}

export default InfoItem;
