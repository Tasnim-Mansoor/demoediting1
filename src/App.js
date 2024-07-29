import "./App.css";
import Home from "./components/Home";
import NavBarComp from "./components/NavBarComp";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";

import Notfound from "./components/Notfound";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Checkout from "./components/Checkout";
import Check from "./components/Check";

import Contact from "./components/Contact";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <NavBarComp />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Services" element={<Services />}></Route>
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/Check" element={<Check />}></Route>
        
      </Routes>
      <Footer />
    </div>
  );
}
AOS.init();

export default App;
