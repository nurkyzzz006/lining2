import scss from './AdminPage.module.scss'; 
const AdminPage = () => {
     return (
      <div id={scss.AdminPage}>
        <div className='container'>
         <div className={scss.content}>
           AdminPage 
         </div>
        </div>
      </div>
    );
};
export default AdminPage;