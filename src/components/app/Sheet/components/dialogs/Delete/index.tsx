import { deleteEventAPI } from "@/app/api/event";
import Loader from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { EventQueryKeys } from "@/models/enums";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteDialogProps {
  id: string;
  isOpenDialog: boolean;
  setIsOpenDialog: (value: boolean) => void;
}

function DeleteDialog({ id, isOpenDialog, setIsOpenDialog }: DeleteDialogProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteEvent, isPending } = useMutation({
    mutationFn: () => {
      return deleteEventAPI({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EventQueryKeys.GetEvents] });
    },
  });

  const handleDeleteEvent = () => {
    deleteEvent();
  };

  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogContent>
        <DialogTitle className="text-xl font-normal mt-3">Delete Event</DialogTitle>
        <div>Are you sure you want to delete this event? This action cannot be undone.</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button onClick={handleDeleteEvent} aria-disabled={isPending}>
            {isPending ? <Loader /> : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
