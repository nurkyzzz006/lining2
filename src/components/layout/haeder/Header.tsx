import { links } from "../../../constants/Link";
import { SiLining } from "react-icons/si";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <SiLining className={scss.icons} />
          <div className={scss.block}>
            {links.map((item, index) => (
              <nav key={index}>
                <Link className={scss.first} to={item.link}>
                  {item.title}
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
