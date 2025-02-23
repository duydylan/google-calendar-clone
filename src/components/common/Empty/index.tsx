import { Card, CardContent } from "@/components/ui/card";
import { Inbox } from "lucide-react";

interface EmptyProps {
  content?: string;
  type?: "small" | "full";
}

function Empty({ content, type }: EmptyProps) {
  return (
    <>
      {type === "small" ? (
        <span className="italic text-gray-500 text-sm">No data</span>
      ) : (
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col gap-2 items-center justify-center h-20 p-0">
            <Inbox />
            <span className="italic text-gray-500 text-sm">{content ? content : "No data"}</span>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default Empty;
