import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/home.jpg";
import HomeDestination from "../components/HomeDestination";
import HomeTrip from "../components/HomeTrip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Discover the Wonders of Wanderlust"
        subtitle="Unveil the World"
        buttontext="Your Travel plan or Destination"
        url="/"
        btnClass="show"
      />
      <HomeDestination />
      <HomeTrip />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
