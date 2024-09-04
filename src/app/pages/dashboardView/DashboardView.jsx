import Sidebar from "@/app/components/sidebar/Sidebar";
import MessageContainer from "@/app/components/messages/MessageContainer";

const DashboardView = () => {
  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default DashboardView;

// const DashboardView = () => {
//   return (
//     <>
//       <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <Sidebar />
//         <MessageContainer />
//       </div>
//     </>
//   );
// };

// export default DashboardView;
