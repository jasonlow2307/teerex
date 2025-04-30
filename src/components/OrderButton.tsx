import { Icon } from "@iconify/react";

const OrderButton = () => {
  return (
    <div className="fixed bottom-6 right-6 group z-50">
      <button className="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black/90 transition-all duration-300 group-hover:scale-105">
        <Icon icon="mdi:order-bool-descending-variant" width="24" height="24" />
      </button>
      <div className="absolute -top-10 right-0 bg-black text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Schedule A Consultation
      </div>
    </div>
  );
};

export default OrderButton;
