import Backgound from "../layout/section/Backgound";
import Pagination from "../layout/section/Pagination";

import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div id={scss.HomePage}>
      <Backgound />
      <Pagination />
    </div>
  );
};
export default HomePage;
