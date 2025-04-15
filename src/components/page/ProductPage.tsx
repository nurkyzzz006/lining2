import scss from './ProductPage.module.scss'; 
const ProductPage = () => {
     return (
      <div id={scss.ProductPage}>
        <div className='container'>
         <div className={scss.content}>
           ProductPage 
         </div>
        </div>
      </div>
    );
};
export default ProductPage;