import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Dashboard />
      </div>
    </>
  );
}
