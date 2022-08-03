import "./navbar.scss";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="!#" className="nav__link">
      <img src={logo} alt="logo" className="nav__logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="http://" className="nav__item-link">
          Features
          </a>
        </li>
        <li className="nav__item">
          <a href="http://" className="nav__item-link">
          Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="http://" className="nav__item-link">
          Stories
          </a>
        </li>
      </ul>
      <button className="nav__button">Download for free</button>
    </nav>
  );
};