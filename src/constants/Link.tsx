import AdminPage from "../components/page/AdminPage";
import HomePage from "../components/page/HomePage";
import ProductPage from "../components/page/ProductPage";
import SignPage from "../components/page/SignPage";

export const links = [
  {
    link: "/",
    title: "Home",
    el: <HomePage/>,
  },
  {
    link: "/product",
    title: "Product",
    el: <ProductPage/>,
  },
  {
    link: "/admin",
    title: "Admin",
    el: <AdminPage/>,
  },
  {
    link: "/sign",
    title: "Sign",
    el: <SignPage/>,
  },
];
