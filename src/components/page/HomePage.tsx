import Backgound from "../layout/section/Backgound";
import Pagination from "../layout/section/Pagination";
import Section from "../layout/section/Section";


import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div id={scss.HomePage}>
      <Backgound />
      <Pagination />
      <Section/>
    </div>
  );
};
export default HomePage;
