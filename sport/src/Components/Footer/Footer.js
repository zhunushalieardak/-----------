import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">Links</p>
            <div className="Foot_links flex">
            <Link className="Foot_link Foot_link__instagram">
                <img src={instagram} alt="" />
              </Link>
              <Link className="Foot_link Foot_link__facebook">
                <img src={facebook} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;