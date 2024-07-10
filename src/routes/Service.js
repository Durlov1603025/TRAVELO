import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="service"
        heroImg="https://images.unsplash.com/photo-1564426699369-f14249ac2c32?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Destinations"
        btnClass="hide"
      />
      <Destination />
    </>
  );
}

export default Service;
