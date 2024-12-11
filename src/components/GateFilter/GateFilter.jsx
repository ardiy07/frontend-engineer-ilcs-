import React from "react";

const GateFilter = ({ gates, filterDataGate, onFilterDataChange }) => {
  return (
    <div className="fixed bottom-0 z-10 bg-white w-full md:relative md:mt-20 md:shadow-md shadow-blue-500 shadow-md">
      <div className="flex md:justify-center overflow-x-scroll md:overflow-hidden gap-5 py-3 px-4">
        {gates?.map((gate) => (
          <button
            key={gate.label}
            onClick={() => onFilterDataChange(gate.name)}
            className={`px-4 py-2 rounded-md border min-w-[150px] ${
              filterDataGate === gate.name
                ? "text-[#17529D] font-bold border-2 border-[#17529D]"
                : "border-gray-500 text-gray-500 border-2 font-semibold"
            }`}
          >
            {gate.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GateFilter;
