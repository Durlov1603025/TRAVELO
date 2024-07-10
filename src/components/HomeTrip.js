import "./Trip.css";
import { Link } from "react-router-dom";
import Img1 from "../assets/san.jpg";
import TripData from "./TripData";
import Wall from "../assets/china_wall.jpg";

function HomeTrip() {
  return (
    <div className="trip">
      <h1>Our Foreign Trips</h1>
      <p>
        From iconic landmarks to hidden gems, our foreign trips offer something
        for every traveler.
      </p>
      <div className="tripcard">
        <TripData
          image={Img1}
          heading="Santorini: Aegean Gem of Whitewashed Splendor"
          text="Nestled in the southern Aegean Sea, Santorini is a breathtaking Greek island
        renowned for its stunning sunsets, dramatic cliffs adorned with
        whitewashed buildings, and crystal-clear blue waters. The island is
        famous for its picturesque villages perched on cliffsides, including the
        iconic towns of Fira and Oia, where narrow cobblestone streets wind
        through charming cafes, boutiques, and traditional tavernas. Santorini
        also boasts unique volcanic beaches with black, red, and white sands,
        remnants of its volcanic history. Visitors flock to Santorini not only
        for its natural beauty but also for its rich history, delicious cuisine,
        and vibrant local culture, making it a must-visit destination in the
        Cyclades archipelago."
        />

        <TripData
          image="https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Darjeeling: Himalayan Haven of Tea and Tranquility"
          text="Darjeeling is a charming hill station renowned for its lush tea gardens, breathtaking mountain views, and colonial-era charm. 
          Known as the ''Queen of the Hills'', Darjeeling offers visitors a peaceful retreat amidst cool, temperate weather and verdant landscapes. 
          The town itself is dotted with colonial architecture, including the iconic Darjeeling Himalayan Railway, a UNESCO World Heritage Site. 
          Travelers can indulge in the region's famous tea culture by visiting tea estates, where they can learn about the tea-making process 
          and sample some of the finest brews in the world. Beyond tea, Darjeeling offers opportunities for trekking, birdwatching, and exploring Buddhist monasteries, adding layers of cultural and natural richness to this enchanting Himalayan destination."
        />

        <TripData
          image="https://images.unsplash.com/photo-1620768237794-f3bfe964f9f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Machu Picchu: Lost Citadel in the Clouds"
          text="Machu Picchu, located high in the Peruvian Andes, is an ancient Incan citadel shrouded in mystery and majesty. This UNESCO World Heritage site is renowned for its breathtaking location atop a mist-shrouded mountain ridge, offering panoramic views of rugged peaks and verdant valleys. Built in the 15th century and abandoned a century later, Machu Picchu remained hidden until its rediscovery in 1911, unveiling intricate stone terraces, temples, and palaces that blend seamlessly with the natural landscape. Visitors can immerse themselves in the rich history and spiritual significance of this archaeological marvel, exploring sacred plazas, winding stone paths, and iconic structures like the Temple of the Sun and Intihuatana stone."
        />
      </div>
      <Link className="butt" to="/trips">
        See More
      </Link>
    </div>
  );
}

export default HomeTrip;
