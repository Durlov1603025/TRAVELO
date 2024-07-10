import "./FooterStyle.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travelo</h1>
          <p>Where Will You Go Next? Explore Our Trips</p>
        </div>
        <div>
          <a href="/">
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaInstagramSquare />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Services</h4>
          <a href="/destinations">Domestic Tour</a>
          <a href="/trips">Foreign Tour</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Projects</a>
          <a href="/">Issues</a>
          <a href="/">Members</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshoot</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policies</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
