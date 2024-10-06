import { useMutation, useQueryClient } from "@tanstack/react-query";

import constant from "../constant";
import { signUpHttp } from "../services/HTTP";
import userLocalstorage from "../utils/userLocalstorage";
import { useNavigate } from "react-router-dom";
const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const signUpMutation = useMutation({
    mutationKey: [constant.SIGN_UP_KEY],
    mutationFn: signUpHttp,
    onSuccess: (data) => {
      userLocalstorage.saveUser(data);
      queryClient.setQueryData([constant.USER_KEY], data)
      navigate("../dashboard",{replace:true});
    },
  });
  return signUpMutation.mutate;
};

export default useSignUp;
