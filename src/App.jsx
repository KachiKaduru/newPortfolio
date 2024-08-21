import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import StackSection from "./sections/StackSection";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
