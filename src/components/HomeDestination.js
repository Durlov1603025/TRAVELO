import { Link } from "react-router-dom";
import "./Homedest.css";

const HomeDestination = () => {
  return (
    <div className="destination">
      <h1>Popular Spots</h1>
      <p>A journey of a thousand miles begins with a single step</p>
      <div className="first-dest">
        <div className="dest-text">
          <h2>Sundarbans: Where Wildlife Meets the Mystical Mangroves! </h2>
          <p>
            Nestled in the delta region of the Bay of Bengal, the Sundarbans is
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
            and adventurers alike.
          </p>
          <Link className="bttn" to="/destinations">
            See More
          </Link>
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1706459671568-9809c9d13430?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="deer"
          />
          <img
            src="https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tiger"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDestination;
