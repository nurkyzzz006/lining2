import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <ul>
              <li>FEATURED COLLECTIONS</li>
              <li>Premium Collection</li>
              <li>Way of Wade</li>
              <li>Sports Life</li>
              <li>Basketball</li>
              <li>Badminton</li>
            </ul>
            <ul>
              <li>ABOUT LI-NING</li>
              <li>Company</li>
              <li>Authorized Distributors</li>
              <li>Anti-Counterfeiting Check</li>
              <li>Product Usage Instructions</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div className={scss.box}>
            <FaInstagram className={scss.icons} />
            <FaTwitter className={scss.icons} />
            <FaFacebookSquare className={scss.icons} />
          </div>
        </div>
        <div className={scss.end}>
          <p>
            Copyright © 1998-2025 Li Ning (China) Sports Goods Co., Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
