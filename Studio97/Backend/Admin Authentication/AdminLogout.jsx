import React from "react";
import ReactDOM from "react-dom";
import { LogOut } from "lucide-react";

const AdminLogout = ({ onCancel, onConfirm }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
{/* md:w-[39%] w-[90%] */}
      {/* Modal */}
      <div className="relative w-full max-w-98 max-h-46 h-60  bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 animate-[fadeIn_0.3s_ease-out]">

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          
          <h2 className="md:text-[4vh] text-[3vh] relative top-3 font-semibold text-gray-800 tracking-wide">
            Confirm Logout
          </h2>

          <p className="text-gray-500 md:text-sm leading-relaxed relative top-5 ">
            You are about to logout from the admin panel.
            <br />
            Do you want to continue?
          </p>

          {/* Buttons */}
          <div className="flex w-[90%] gap-4 relative top-12 ">
            
            <button
              onClick={onCancel}
              className="w-1/2 h-10 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-200"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              className="w-1/2 py-3 rounded-xl bg-linear-to-r from-red-700 to-red-800 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AdminLogout;