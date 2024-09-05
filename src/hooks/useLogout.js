"use client";
import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const router = useRouter();
  const logout = () => {
    setLoading(true);
    Cookies.remove("token");
    setAuthUser(null);
    setLoading(false);
    router.refresh();
  };
  return { loading, logout };
};

export default useLogout;
