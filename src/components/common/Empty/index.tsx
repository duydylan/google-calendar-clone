import { Card, CardContent } from "@/components/ui/card";
import { Inbox } from "lucide-react";

interface EmptyProps {
  content?: string;
}

function Empty({ content }: EmptyProps) {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-2 items-center justify-center h-20 text-gray-500 text-sm p-0">
        <Inbox />
        {content ? content : "No data"}
      </CardContent>
    </Card>
  );
}

export default Empty;
