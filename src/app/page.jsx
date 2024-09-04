import Dashboard from "./dashboard/page";
import { useAuthContext } from "@/contexts/AuthContext";

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
