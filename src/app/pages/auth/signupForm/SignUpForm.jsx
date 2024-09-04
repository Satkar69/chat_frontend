import Link from "next/link";
import GenderCheckBox from "./GenderCheckBox";

const SignUpForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            SignUp
            <span className="text-blue-500"> ChatApp</span>
          </h1>
          <form>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Satkar Niraula"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="satkarniraula"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="enter password"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="comfirm password"
                className="w-full input input-bordered h-10"
              />
            </div>
            <GenderCheckBox />
            <Link
              href="/login"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

// const SignUpForm = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             SignUp
//             <span className="text-blue-500"> ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Satkar Niraula"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="satkarniraula"
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
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Confirm Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="comfirm password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <GenderCheckBox />
//             <a
//               href=""
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               Already have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUpForm;
