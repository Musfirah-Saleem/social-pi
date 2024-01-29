import React from "react";

const Candidate = () => {
  const candidates = [
    {
      id: 1,
      name: "Tunde Akanbi",
      party: "Chair Party",
      votes: 259,
      image: "./card1.svg",
    },
    {
      id: 2,
      name: "Onoriode Onos",
      party: "Table Party",
      votes: 259,
      image: "./card2.svg",
    },
    {
      id: 3,
      name: "Anita John",
      party: "Floor Party",
      votes: 259,
      image: "./card3.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-start">Other Candidates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="max-w-xs mx-auto rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={candidate.image}
              alt={candidate.name}
            />
            <div className="font-bold text-xl mb-2 mt-3 text-black px-6">
              {candidate.name}
            </div>
            <p className="text-gray-700 text-base px-6 ">{candidate.party}</p>
            <div className="flex justify-between items-center mt-8 px-6 py-3 bg-white border-t border-gray-150">
              <span className="text-green-500 font-semibold">{`${candidate.votes} votes`}</span>
              <div className="flex gap-2">
                <span className="text-black">Dive deep</span>
                <img src="./Vector.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidate;
