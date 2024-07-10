import "./Trip.css";
import Img1 from "../assets/san.jpg";
import TripData from "./TripData";
import Wall from "../assets/china_wall.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Explore Our Foreign Tours Today</h1>
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
        <TripData
          image="https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="The Great Barrier Reef: Australia's Underwater Wonderland"
          text="The Great Barrier Reef, stretching over 2,300 kilometers along Australia's northeastern coast, is the world's largest coral reef system and a UNESCO World Heritage site. This natural wonder comprises thousands of vibrant coral cays, islands, and reefs teeming with marine life, including colorful fish, turtles, sharks, and rays. The reef's kaleidoscope of coral formations, from intricate labyrinths to towering bommies, creates a mesmerizing underwater landscape. Visitors can snorkel or dive into crystal-clear waters to encounter this biodiversity hotspot, exploring coral gardens and encountering species found nowhere else on Earth."
        />

        <TripData
          image={Wall}
          heading="The Great Wall of China: A Wonder Awaits"
          text="The Great Wall of China is not just a wall; it's a staggering testament to human ingenuity and perseverance. Snaking for over 13,000 miles (21,000 kilometers) across rugged mountains, vast deserts, and lush grasslands,
          it's an awe-inspiring feat of engineering. Parts of it date back to the 7th century BC, although it was only finished in 1878.
          Designed to protect China’s northern empire from attack, the wall is one of the longest man made structures on the planet.
          Today, it stands as a UNESCO World Heritage Site, a symbol of China's rich history, and a must-visit for any traveler seeking adventure and cultural immersion."
        />
      </div>
      {/* <Link className="butt" to="/trips">
        See More
      </Link> */}
    </div>
  );
}

export default Trip;
