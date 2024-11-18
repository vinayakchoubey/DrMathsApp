import "./App.css";
import Header from "./components/common/header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/loginsignup/Login";
import Signup from "./components/loginsignup/Signup";

function App() {
  const location = useLocation();

  // Routes where the header and footer should not be shown
  const noHeaderFooter = ["/login", "/signup"];

  return (
    <>
      {!noHeaderFooter.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!noHeaderFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
