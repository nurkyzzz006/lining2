import EditData from "../components/layout/product/update/EditData";
import AdminPage from "../components/page/AdminPage";
import HomePage from "../components/page/HomePage";
import ProductPage from "../components/page/ProductPage";
import SignPage from "../components/page/SignPage";
import DetailsPage from "../components/page/details/DetailsPage";

export const links = [
  {
    link: "/",
    title: "Home",
    el: <HomePage />,
  },
  {
    link: "/product",
    title: "Product",
    el: <ProductPage />,
  },
  {
    link: "/admin",
    title: "Admin",
    el: <AdminPage />,
  },
  {
    link: "/sign",
    title: "Sign",
    el: <SignPage />,
  },
  {
    link: "/edit/:id",
    el: <EditData />,
  },
  {
    link: "/details/:id",
    el: <DetailsPage />,
  },
];
