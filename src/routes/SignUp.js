import "../components/Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="maain">
          <div className="left">
            <img
              src="https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="signup"
            />
          </div>

          <div className="right">
            <h2>Sign Up</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name"></input>
              <br></br>
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email"></input>
              <br></br>
              <label>Password</label>
              <input type="password" placeholder="password"></input>
              <br></br>
              <button type="submit">Sign Up</button>
            </form>

            <div>
              <p className="have-account">
                Have an account?{" "}
                <Link to="/login">
                  <span>Log In here </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
