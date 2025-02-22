import FormUI from "@/components/common/Form";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface EditProps {
  title: string;
  description?: string;
}

function Edit({ title, description }: EditProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit Event</DialogTitle>
      </DialogHeader>
      <FormUI submitLabel="Save">
        <Input label="Title" name="title" defaultValue={title} autoFocus />
        <Textarea label="Description" name="description" defaultValue={description} />
      </FormUI>
    </>
  );
}

export default Edit;
