import React from "react";

function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-gray-500 bg-opacity-50 px-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-lg">
        {children}
        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="border-[#17529D] border-2 text-[#17529D] font-bold py-2 px-4 rounded-md w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
