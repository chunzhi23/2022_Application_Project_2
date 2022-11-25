import logo from "../assets/chunzhi23.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} className="png" alt="logo" />
        </div>
        <h1>
          <span>Wenna</span> coding?
        </h1>
      </header>
      <NavLinks />
    </>
  );
}
