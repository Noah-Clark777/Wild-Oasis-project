import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { upddateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser(reset) {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: upddateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User successfully Updated!");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
