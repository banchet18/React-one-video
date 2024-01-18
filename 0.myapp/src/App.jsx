import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
