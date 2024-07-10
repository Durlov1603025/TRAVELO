import "../components/Login.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Img from "../assets/bb.jpg";

function Login() {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="maain">
          <div className="left">
            <img src={Img} alt="login" />
          </div>

          <div className="right">
            <h2>Log In</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email"></input>
              <br></br>
              <label>Password</label>
              <input type="password" placeholder="password"></input>
              <br></br>
              <button type="submit">Login</button>
            </form>

            <div>
              <p className="have-account">
                Don't have any account yet?{" "}
                <Link to="/signup">
                  <span>Register Now </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
