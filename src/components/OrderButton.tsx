import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ContactForm from "./ContactForm";

const OrderButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 group z-50">
        <button
          onClick={handleOpen}
          className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black/90 transition-all duration-300 group-hover:scale-105"
        >
          <Icon icon="mdi:calendar-text" width="24" height="24" />
        </button>
        <div className="absolute -top-10 right-0 bg-black text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Schedule A Consultation
        </div>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-50"
            }`}
            onClick={handleClose}
          ></div>

          {/* Modal Content */}
          <div
            className={`bg-[#f2efe8] rounded-xl w-full max-w-2xl mx-4 p-6 shadow-2xl relative z-10 transition-all duration-300 transform ${
              isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <Icon icon="mdi:calendar-text" width="20" height="20" />
                </div>
                <h2 className="text-2xl font-bold">Schedule a Consultation</h2>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <Icon icon="mdi:close" width="24" height="24" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[70vh] overflow-y-auto py-2 custom-scrollbar">
              <ContactForm />
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS for smooth scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default OrderButton;
