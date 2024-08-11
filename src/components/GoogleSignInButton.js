import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "";
//not given

const GoogleSignInButton = () => {
  const onSuccess = (response) => {
    console.log("Login Success: currentUser:", response.profileObj);
    // Handle the login success here (e.g., send the token to your server)
  };

  const onFailure = (response) => {
    console.log("Login failed: res:", response);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      style={{ borderRadius: "0px 0px 0px 0px", width: 197.6, height: 32.9 }}
    />
  );
};

export default GoogleSignInButton;
