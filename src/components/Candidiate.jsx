import React from "react";

const Candidate = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-start">Other Candidates</h1>

      <div className="flex justify-around mt-8">
        {/* Tunde Akanbi */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="./card1.svg" alt="Tunde Akanbi" />
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
              }}
            >
              Tunde Akanbi
            </div>
            <p
              className="text-gray-700 text-base"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              Chair Party
            </p>
            <div className="flex justify-between items-center mt-4 p-3 bg-white border-t border-gray-300">
              <span className="text-black">259 votes</span>
              <span className="text-black">Dive deep</span>
            </div>
          </div>
        </div>

        {/* Onoriode Onos */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="./card2.svg" alt="Onoriode Onos" />
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
              }}
            >
              Onoriode Onos
            </div>
            <p
              className="text-gray-700 text-base"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              Table Party
            </p>
            <div className="flex justify-between items-center mt-4 p-3 bg-white border-t border-gray-300">
              <span className="text-black">259 votes</span>
              <span className="text-black">Dive deep</span>
            </div>
          </div>
        </div>

        {/* Anita John */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="./card3.svg" alt="Anita John" />
          <div className="px-6 py-4">
            <div
              className="font-bold text-xl mb-2 text-black"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
              }}
            >
              Anita John
            </div>
            <p
              className="text-gray-700 text-base"
              style={{
                fontFamily: "Helvetica Neue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              Floor Party
            </p>
            <div className="flex justify-between items-center mt-4 p-3 bg-white border-t border-gray-100 w-full">
              <span className="text-black">259 votes</span>
              <span className="text-black">Dive deep</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
