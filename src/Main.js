import Authnavigation from "./navigation/Authnavigation";
import { useQuery } from "@tanstack/react-query";
import { reqToken } from "./features/refreshtoken/reqToken";
import { useState } from "react";
import Stacknavigation from "./navigation/Stacknavigation";

const Main = () => {
  const [isLogin, setIslogin] = useState("");
  useQuery({
    queryKey: ["reqToken"],
    queryFn: reqToken,
    onSuccess: (res) => {
      setIslogin(res.accesstoken);
    },
  });
  return <>{isLogin && isLogin ? <Stacknavigation /> : <Authnavigation />}</>;
};

export default Main;
