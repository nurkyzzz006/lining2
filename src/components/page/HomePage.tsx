import Backgound from "../layout/section/Backgound";
import Section from "../layout/section/Section";

import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div id={scss.HomePage}>
      <Backgound />
      <Section/>
    </div>
  );
};
export default HomePage;

