"use client";

import { useState } from "react";
import Link from "next/link";
import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-500"> ChatApp</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="enter username"
                className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <Link
              href="/signup"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Do not have an account?
            </Link>
            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

// const LoginForm = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-500"> ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="enter username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="enter password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <a
//               href=""
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               Don't have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginForm;
