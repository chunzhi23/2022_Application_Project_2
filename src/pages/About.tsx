import logo from "../assets/dimigo.png";
import NavLinks from "./NavLinks";
import "./Page.scss";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div id="container">
        <div className="highschool">
          <img className="logo" src={logo} title="KDMHS" alt="my highschool" />
          <p className="text">
            2021-2024 (due) Korea Digital Media Highschool (KDMHS)
          </p>
        </div>
      </div>
      <NavLinks />
    </>
  );
}
