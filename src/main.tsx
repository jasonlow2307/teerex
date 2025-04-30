import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";
import OrderButton from "./components/OrderButton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <OrderButton />
    </BrowserRouter>
  </StrictMode>
);
