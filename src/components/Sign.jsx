import React, { useState } from "react";

const Sign = () => {
  const [activeTab, setActiveTab] = useState("sentiment");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <div
                onClick={() => handleTabClick("sentiment")}
                className={`inline-block p-4 cursor-pointer ${
                  activeTab === "sentiment"
                    ? "text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                    : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Sentiment analysis
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => handleTabClick("Track")}
                className={`inline-block p-4 cursor-pointer ${
                  activeTab === "Track"
                    ? "text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                    : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Track sentiment
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => handleTabClick("Contacts")}
                className={`inline-block p-4 cursor-pointer ${
                  activeTab === "Contacts"
                    ? "text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                    : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Support candidate
              </div>
            </li>
          </ul>
        </div>

        {/* New div below the tabs with border on all sides */}
        <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8 h-[80vh] border border-gray-200 dark:border-gray-600 flex items-center justify-center mb-10">
          {activeTab === "sentiment" && (
            <p className="text-black-500 dark:text-gray-400 font-semibold">
              Sign up for access
            </p>
          )}
          {activeTab === "Track" && (
            <p className="text-black-500 dark:text-gray-400 font-semibold">
              track sentiment
            </p>
          )}
          {activeTab === "Contacts" && (
            <p className="text-black-500 dark:text-gray-400 font-semibold">
              supported candidate
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Sign;

// import React, { useState } from "react";

// const Sign = () => {
//   const [activeTab, setActiveTab] = useState("Affiliation");

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
//           <ul className="flex flex-wrap -mb-px">
//             <li className="me-2">
//               <div
//                 onClick={() => handleTabClick("Affiliation")}
//                 className={`inline-block p-4 cursor-pointer ${
//                   activeTab === "Affiliation"
//                     ? "text-white bg-green-700 border border-gray-600  active dark:text-green-500 dark:border-green-500"
//                     : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Affiliation
//               </div>
//             </li>
//             <li className="me-2">
//               <div
//                 onClick={() => handleTabClick("Location")}
//                 className={`inline-block p-4 cursor-pointer ${
//                   activeTab === "Location"
//                     ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
//                     : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Location
//               </div>
//             </li>
//             <li className="me-2">
//               <div
//                 onClick={() => handleTabClick("PreviousRole")}
//                 className={`inline-block p-4 cursor-pointer ${
//                   activeTab === "PreviousRole"
//                     ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
//                     : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Previous Role
//               </div>
//             </li>
//             <li className="me-2">
//               <div
//                 onClick={() => handleTabClick("RunningMate")}
//                 className={`inline-block p-4 cursor-pointer ${
//                   activeTab === "RunningMate"
//                     ? "text-white bg-green-500 border border-gray-600 active dark:text-green-500 dark:border-green-500"
//                     : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Running Mate
//               </div>
//             </li>
//             <li className="me-2">
//               <div
//                 onClick={() => handleTabClick("Age")}
//                 className={`inline-block p-4 cursor-pointer ${
//                   activeTab === "Age"
//                     ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
//                     : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Age
//               </div>
//             </li>
//           </ul>
//         </div>

//         <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8 h-[80vh] border border-gray-200 dark:border-gray-600 flex items-center justify-center mb-10">
//           {activeTab === "Affiliation" && (
//             <p className="text-black dark:text-gray-400 font-semibold">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
//               augue neque gravida in fermentum et sollicitudin ac.
//             </p>
//           )}
//           {activeTab === "Location" && (
//             <p className="text-white dark:text-gray-400 font-semibold">
//               Location content
//             </p>
//           )}
//           {activeTab === "PreviousRole" && (
//             <p className="text-white dark:text-gray-400 font-semibold">
//               Previous Role content
//             </p>
//           )}
//           {activeTab === "RunningMate" && (
//             <p className="text-white dark:text-gray-400 font-semibold">
//               Running Mate content
//             </p>
//           )}
//           {activeTab === "Age" && (
//             <p className="text-white dark:text-gray-400 font-semibold">
//               Age content
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sign;
