import Contactus from "../components/Contactus";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="contact"
        heroImg="https://images.unsplash.com/photo-1444487233259-dae9d907a740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact us"
        btnClass="hide"
      />
      <Contactus />
    </>
  );
}

export default Contact;
