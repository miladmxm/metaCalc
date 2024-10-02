import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOutUpHttp } from "../services/HTTP";
import constant from "../constant";
import userLocalstorage from "../utils/userLocalstorage";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const signoutMutation = useMutation({
    mutationFn:signOutUpHttp,
    mutationKey:[constant.SIGN_OUT_KEY],
    onSuccess:()=>{
        queryClient.setQueriesData([constant.USER_KEY],null)
        userLocalstorage.removeUser()
        navigate("/",{replace:true})
    }
  })
  return signoutMutation.mutate;
};


export default useSignOut;
