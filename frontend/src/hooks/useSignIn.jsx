import { useMutation, useQueryClient } from "@tanstack/react-query";

import constant from "../constant";
import { signInHttp } from "../services/HTTP";
import userLocalstorage from "../utils/userLocalstorage";
import { useNavigate } from "react-router-dom";
const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const signInMutation = useMutation({
    mutationKey: [constant.SIGN_IN_KEY],
    mutationFn: signInHttp,
    onSuccess: (data) => {
      userLocalstorage.saveUser(data);
      queryClient.setQueryData([constant.USER_KEY], data)
      queryClient.invalidateQueries([constant.WEEKS_KEY])
      navigate("../dashboard",{replace:true});
    },
  });
  return signInMutation.mutate;
};

export default useSignIn;
