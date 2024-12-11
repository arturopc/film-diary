import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const handleClick = () => setClick((prev) => !prev);
  const handleHovering = () => setHovering(true);
  const handleNotHovering = () => setHovering(false);
  const updateBgColor = () => {
    if (window.scrollY < 618) {
      setBgColor("transparent");
      handleNotHovering();
    } else if (window.scrollY >= 618 && window.scrollY < 2256) {
      setBgColor("#b5d1cceb");
    } else if (window.scrollY >= 2256) {
      setBgColor("#fff59eeb");
    }
  };

  const colorStyle = {
    backgroundColor: bgColor,
  };

  const titleColorStyle = {
    color: "black",
    borderBottom: hovering ? "3px solid black" : "none",
    cursor: "pointer",
    textDecoration: "none",
  };

  window.addEventListener("scroll", updateBgColor);

  return (
    <div className="header" style={colorStyle}>
      <nav className="navbar">
        {bgColor !== "transparent" && (
          <h1 className="header-title">
            <Link
              className="nav-link"
              id="main-button"
              to="title"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              onMouseEnter={handleHovering}
              onMouseLeave={handleNotHovering}
              style={titleColorStyle}
            >
              Film Diary
            </Link>
          </h1>
        )}
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="main-section"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={handleClick}
            >
              Watched
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="wish-list"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClick}
            >
              Wish List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="currently-list"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClick}
            >
              Currently Showing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="upcoming-list"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClick}
            >
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
