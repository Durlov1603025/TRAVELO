import "./Dest.css";
import Destinationdata from "./Destinationdata";
import Jaflong from "../assets/jaff.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>A journey of a thousand miles begins with a single step</p>

      <Destinationdata
        className="first-dest"
        heading="Sundarbans: Where Wildlife Meets the Mystical Mangroves!"
        text="Nestled in the delta region of the Bay of Bengal, the Sundarbans is
      a mesmerizing natural wonder. This UNESCO World Heritage Site is
      renowned for its vast mangrove forests, home to the iconic Royal
      Bengal tiger and an incredible diversity of wildlife. The
      intertwining network of waterways, mudflats, and small islands
      creates a unique ecosystem where lush greenery meets brackish
      waters, teeming with life. Visitors to the Sundarbans can explore
      its mystical terrain by boat, encountering rare species like
      estuarine crocodiles, spotted deer, and vibrant birdlife. Beyond its
      wildlife, the Sundarbans captivates with its serene beauty and
      offers a glimpse into one of the world's most biologically rich
      habitats, making it a must-visit destination for nature enthusiasts
      and adventurers alike."
        img1="https://images.unsplash.com/photo-1706459671568-9809c9d13430?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Destinationdata
        className="first-dest-revr"
        heading="Jaflong: A Riverside Paradise in Northeast Bangladesh"
        text="Jaflong is a picturesque destination renowned for its natural beauty and tranquil surroundings. Located amidst rolling hills and alongside the Dawki River, Jaflong offers breathtaking views of lush green tea gardens and crystal-clear waters. Visitors can unwind amidst the gentle flow of the river, take in the scenic beauty of the surrounding hills, and explore the vibrant local culture. Known for its iconic hanging bridge and nearby stone quarries, Jaflong provides a perfect blend of relaxation and exploration for nature enthusiasts and travelers seeking a peaceful retreat in Bangladesh."
        img1="https://media.istockphoto.com/id/1756565248/photo/jaflong-located-between-tea-gardens-and-hills-is-the-tourist-hotspot-of-sylhet-a-hill-station.webp?b=1&s=170667a&w=0&k=20&c=vm17r75RR_-gGk0MzqsjUsYhyB9NGcYv6bURVgCYjIo="
        img2={Jaflong}
      />
      <Destinationdata
        className="first-dest"
        heading="Cox's Bazar: Where Serenity Meets Adventure"
        text="Cox's Bazar isn't just a beach paradise; it's a kaleidoscope of experiences. Bask on the world's longest unbroken natural beach, stretching for over 120 kilometers. Dive into the turquoise waters teeming with marine life. Explore the bustling seafood markets and charming fishing villages. For the adventurous, trek through the lush hills, discover hidden waterfalls, or ride crashing waves. Cox's Bazar offers something for everyone, making it the perfect escape for relaxation, exploration, and unforgettable memories."
        img1="https://images.unsplash.com/photo-1562627076-d3f2ef96446c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1665565246920-d640754d2d58?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default Destination;
