import React from "react";
import pic from "./logo.png";
import Imagehome from "./Imagehome";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("token");
    console.log("Logged out");
    let path = `/home`;
    navigate(path);
  };
  const login = () => {
    let path = `/login`;
    navigate(path);
  };
  const signup = () => {
    let path = `/signup`;
    navigate(path);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Imagehome name={pic} width="200"></Imagehome>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active font-weight-bold h4"
              href="/home"
            >
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link active font-weight-bold h4"
              href="/groups"
            >
              Groups <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link active font-weight-bold h4"
              href="/friends"
            >
              Friends <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link active font-weight-bold h4"
              href="/activity"
            >
              Activity <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
        <div>
          <button type="button" className="btn mr-3" onClick={signup}>
            Sign up
          </button>

          {sessionStorage.getItem("token") &&
          sessionStorage.getItem("token") !== "" &&
          sessionStorage.getItem("token") !== undefined ? (
            <button type="button" className="btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <button type="button" className="btn" onClick={login}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
