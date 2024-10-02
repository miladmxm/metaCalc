import { useQuery } from "@tanstack/react-query";
import constant from "../constant";
import { getUserHttp } from "../services/HTTP";
import userLocalstorage from "../utils/userLocalstorage";
import { useEffect } from "react";

const useUser = () => {
  const {
    data: user,
    isError,
  } = useQuery({
    queryKey: [constant.USER_KEY],
    queryFn: ({ signal }) => getUserHttp(signal),
    placeholderData: userLocalstorage.getUser(),
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  if (isError) {
    userLocalstorage.removeUser();
  }

  useEffect(() => {
    if (!user) {
      userLocalstorage.removeUser();
    } else {
      userLocalstorage.saveUser(user);
    }
  }, [user]);

  return { user: user ?? null };
};

export default useUser;
