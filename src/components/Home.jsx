import React, { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Affiliation");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto mt-[120px] ">
      <div className="ml-8">
        <p>Home/ Candidate</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 p-4 lg:p-8">
        <div className="mb-4 lg:mb-0 lg:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="./man.svg"
            alt="Your Alt Text"
          />
        </div>

        <div className="text-center lg:text-left lg:w-1/2">
          <h4
            className="text-3xl font-semibold mb-4"
            style={{
              color: "#131313",
              fontFamily: "Helvetica Neue",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Stanley Egbele
          </h4>
          <div className="flex justify-between align-center">
            <div className="">1st position</div>
            <div className="">28%</div>
          </div>
          <div className=" text-black mt-3 py-6  items-center border-t-2 border-gray-120"></div>
          <p className="text-gray-500 mb-2">Profile</p>
          <p className="text-base lg:text-lg leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin ac. Hendrerit
            gravida rutrum quisque non tellus. Lorem ipsum dolor sit amet.
            Fringilla phasellus faucibus scelerisque eleifend. Lorem donec massa
            sapien faucibus. Tincidunt arcu non sodales neque. Erat velit
            scelerisque in dictum non. Varius morbi enim nunc faucibus a. Id
            venenatis a condimentum vitae.
          </p>
          <p className="text-gray-500 mb-3 mt-7">Other information</p>
          <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <div
                  onClick={() => handleTabClick("Affiliation")}
                  className={`inline-block p-4 cursor-pointer ${
                    activeTab === "Affiliation"
                      ? "text-white bg-green-700 border border-gray-600  active dark:text-green-500 dark:border-green-500"
                      : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  Affiliation
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => handleTabClick("Location")}
                  className={`inline-block p-4 cursor-pointer ${
                    activeTab === "Location"
                      ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
                      : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  Location
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => handleTabClick("PreviousRole")}
                  className={`inline-block p-4 cursor-pointer ${
                    activeTab === "PreviousRole"
                      ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
                      : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  Previous Role
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => handleTabClick("RunningMate")}
                  className={`inline-block p-4 cursor-pointer ${
                    activeTab === "RunningMate"
                      ? "text-white bg-green-500 border border-gray-600 active dark:text-green-500 dark:border-green-500"
                      : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  Running Mate
                </div>
              </li>
              <li className="me-2">
                <div
                  onClick={() => handleTabClick("Age")}
                  className={`inline-block p-4 cursor-pointer ${
                    activeTab === "Age"
                      ? "text-white bg-green-500 border border-gray-600  active dark:text-green-500 dark:border-green-500"
                      : "text-gray-600 bg-transparent border border-gray-300  hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  Age
                </div>
              </li>
            </ul>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            augue neque gravida in fermentum et sollicitudin.
          </p>
          <p className="text-gray-500 mb-3 mt-3">Social media handles</p>
          <div className="flex gap-9 mt-3">
            <div className="flex gap-2">
              <img src="./Facebook.svg" alt="" />
              <span className="text-black">Stanley Egbele</span>
            </div>
            <div className="flex gap-2">
              <img src="./LinkedIn.svg" alt="" />
              <span className="text-black">Stanley Egbele</span>
            </div>
            <div className="flex gap-2">
              <img src="./Twitter.svg" alt="" />
              <span className="text-black">Stanforthepeople</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
