import { Link } from "react-router-dom";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  return (
    <header
      className={`w-full py-6 border-b border-black/10 sticky top-0 bg-[#f2efe8] z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/src/assets/images/dino.png" width={70} />
          <div className="text-2xl font-semibold">Tee Rex & Associates</div>
        </div>
        <div className="flex gap-8">
          <Link
            to="/services"
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a
            href="#about"
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="hover:text-gray-600 text-base font-medium transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
