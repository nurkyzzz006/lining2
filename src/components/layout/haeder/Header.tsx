import { FC } from "react";
import scss from "./Header.module.scss";

import { Link } from "react-router-dom";
import { links } from "../../../constants/Link";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <img
            src="https://lining-sport.ru/local/templates/main/assets/images/logo.svg"
            alt="LiningLogo"
          />

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
    </section>
  );
};

export default Header;
