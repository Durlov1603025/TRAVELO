import "./styles.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Tours from "./routes/Tours";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Service />} />
        <Route path="/trips" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}
