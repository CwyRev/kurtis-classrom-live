import AboutSection from "./components/AboutSection";
import ClassCodeSection from "./components/ClassCodeSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceSection from "./components/ServiceSection";
import SignupSection from "./components/SignupSection";
import FooterSection from "./components/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ClassCodeSection />
      <ServiceSection />
      <SignupSection />
      <FooterSection />
    </>
  );
}

export default App;
