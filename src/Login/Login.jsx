import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../http-common";

export default function Login({ handleSignup }) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  function handleEmail(e) {
    const value = e.target.value;
    setEmail(value);
    setEmailError(emailRegex.test(value) ? "" : "Enter a valid email address");
  }

  function handlePassword(e) {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(passwordRegex.test(value) ? "" : "Password is incorrect");
  }

  async function login(e) {
    e.preventDefault();

    try {
      if (!emailRegex.test(email)) {
        setEmailError("Enter a valid email address");
      } else if (!passwordRegex.test(password)) {
        setPasswordError("Password is incorrect");
      } else {
        const user = await loginUser({ email, password });
        console.log("User data", user);
        if (user === "Login successful") {
          alert("Login successful");
          setEmail("");
          setPassword("");
          navigate("/home");
        } else {
          alert("User not found. Please sign up first.");
        }
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  }

  return (
    <div className="Login_page">
      <h1 className="form_header">Login</h1>
      <form className="form">
        <div className="email">
          <input
            className="user_value_email"
            type="email"
            placeholder="Enter email"
            name="username"
            value={email}
            onChange={handleEmail}
          />
          {emailError && <p className="email-error-message">{emailError}</p>}
        </div>
        <br />
        <input
          className="user_value_password"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        {passwordError && (
          <div className="password-error-message">{passwordError}</div>
        )}
        <p className="reset_password-login">
          <Link to="/forgetpassword">
            <b>Forgot Password?</b>
          </Link>
        </p>
        <input
          className="user_value"
          type="submit"
          value="Login"
          onClick={login}
        />
        <p
          className="Signup_btn"
          onClick={() => {
            handleSignup();
            navigate("/signUp");
          }}
        >
          Don't have an account? <span>SignUp</span>
        </p>
      </form>
    </div>
  );
}
