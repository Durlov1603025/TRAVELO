import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Tours() {
  return (
    <>
      <Navbar />
      <Hero
        cName="tour"
        heroImg="https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Foreign Trips"
        btnClass="hide"
      />
      <Trip />
    </>
  );
}

export default Tours;
