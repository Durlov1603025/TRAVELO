import { Component } from "react";
import "./Navstyle.css";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavItems">
        <Link to="/">
          <h1 className="nav-logo">Travelo</h1>
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
          {this.state.clicked ? (
            <FaTimes size={20} style={{ color: "black" }} />
          ) : (
            <FaBars />
          )}
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.clName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
