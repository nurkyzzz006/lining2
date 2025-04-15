import scss from './HomePage.module.scss'; 
const HomePage = () => {
     return (
      <div id={scss.HomePage}>
        <div className='container'>
         <div className={scss.content}>
           HomePage 
         </div>
        </div>
      </div>
    );
};
export default HomePage;