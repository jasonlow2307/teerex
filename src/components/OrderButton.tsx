import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

const OrderButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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

  // Handle clicks outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      {/* Floating Button - Adjusted position for mobile */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 group z-50">
        <button
          onClick={handleOpen}
          className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black/90 active:bg-black/80 transition-all duration-300 group-hover:scale-105"
          aria-label={t("orderButton.scheduleConsultation")}
        >
          <Icon
            icon="mdi:calendar-text"
            width="20"
            height="20"
            className="md:w-6 md:h-6"
          />
        </button>
        {/* Tooltip - Hidden on small mobile screens */}
        <div className="absolute -top-10 right-0 bg-black text-white text-xs md:text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
          {t("orderButton.scheduleConsultation")}
        </div>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-3 md:px-4">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-50"
            }`}
            onClick={handleClose}
          ></div>

          {/* Modal Content - Responsive sizing and padding */}
          <div
            ref={modalRef}
            className={`bg-[#f2efe8] rounded-xl w-full max-w-2xl mx-2 p-4 md:p-6 shadow-2xl relative z-10 transition-all duration-300 transform ${
              isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-black/10 pb-3 md:pb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <Icon
                    icon="mdi:calendar-text"
                    width="16"
                    height="16"
                    className="md:w-5 md:h-5"
                  />
                </div>
                <h2
                  id="modal-title"
                  className="text-xl md:text-2xl font-bold truncate"
                >
                  {t("orderButton.title")}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/20 transition-colors"
                aria-label="Close"
              >
                <Icon icon="mdi:close" width="20" height="20" />
              </button>
            </div>

            {/* Modal Body - Adjusted for different screen sizes */}
            <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto py-1 md:py-2 custom-scrollbar">
              <ContactForm />
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS for smooth scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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
        @media (max-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
        }
      `}</style>
    </>
  );
};

export default OrderButton;
