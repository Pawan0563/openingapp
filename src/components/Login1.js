import { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import "./Login1.css";
import GoogleSignInButton from "./GoogleSignInButton";

const Login1 = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const onButtonSignInClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  return (
    <div
      className={`login ${className} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <img className="side-right-icon" alt="" src="/side-right@2x.png" />
      <div className="group-parent">
        <img className="frame-child" alt="" src="/group-200.svg" />
        <h1 className="base">Base</h1>
      </div>
      <div className="group-container">
        <div className="login-form-parent">
          <form className="login-form">
            <div className="card">
              <div className="card1" />
            </div>
            <div className="input-field">
              <TextField
                className="input-field1"
                color="primary"
                size="medium"
                placeholder="Enter Your Email"
                required={true}
                type="text"
                sx={{
                  "& .MuiInputBase-root": { height: "43.9px" },
                  width: "356.8px",
                }}
              />
            </div>
            <TextField
              className="input"
              color="primary"
              size="medium"
              placeholder="Enter your password"
              variant="outlined"
              type="text"
              sx={{
                "& .MuiInputBase-root": { height: "43.9px" },
                width: "356.8px",
              }}
            />
            <Button
              className="button-sign-in"
              disableElevation
              color="primary"
              size="medium"
              variant="contained"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: 356.8,
                height: 43.9,
              }}
              onClick={onButtonSignInClick}
            >
              Sign In
            </Button>
            <b className="email-address">Email address</b>
            <b className="password">Password</b>
            <b className="forgot-password">Forgot password?</b>
            <b className="dont-have-an-container">
              <span className="dont-have-an">{`Don’t have an account? `}</span>
              <span className="register-here">Register here</span>
            </b>
          </form>
          <Button className="google-sign-in">
            <GoogleSignInButton />
          </Button>
          <div className="apple-sign-in">
            <div className="white">
              <div className="button" />
            </div>
            <b className="sign-in-with">Sign in with Apple</b>
            <img className="apple-1-icon" alt="" src="/apple-1.svg" />
          </div>
          <h1 className="sign-in">Sign In</h1>
          <b className="sign-in-to">Sign in to your account</b>
        </div>
        <div className="frame-wrapper">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <a className="carbonlogo-linkedin">
              <img className="vector-icon2" alt="" src="/vector2.svg" />
            </a>
            <a className="carbonlogo-discord">
              <img className="vector-icon3" alt="" src="/vector3.svg" />
              <img className="vector-icon4" alt="" src="/vector4.svg" />
            </a>
          </div>
        </div>
      </div>
      <ThemeSwitch onChange={handleThemeChange} />
    </div>
  );
};

Login1.propTypes = {
  className: PropTypes.string,
};

export default Login1;
