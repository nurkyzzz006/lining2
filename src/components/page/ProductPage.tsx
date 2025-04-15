import ListProduct from "../layout/product/ListProduct";
import scss from "./ProductPage.module.scss";
const ProductPage = () => {
  return (
    <div id={scss.ProductPage}>
      <div className="container">
        <div className={scss.content}>
          <ListProduct />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
