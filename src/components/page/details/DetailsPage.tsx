import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import scss from "./DetailsPage.module.scss";
import axios from "axios";
import { getProduct, toggleDescription } from "../../../store/slices/ItemSlice";
import { useEffect } from "react";

const DetailsPage = () => {
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();
  const product = useAppSelector((s) => s.data.get);
  const expandedDescriptions = useAppSelector(
    (s) => s.data.expandedDescriptions
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getOneProduct(id);
    }
  }, [id]);

  async function getOneProduct(id: string) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch(getProduct(data));
    } catch (error) {
      console.error("Ошибка получения продукта:", error);
    }
  }

  const getShortDescription = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 30) return text;
    return words.slice(0, 30).join(" ") + "...";
  };

  const isExpanded = product?._id ? expandedDescriptions[product._id] : false;

  if (!product) {
    return (
      <div className={scss.loading}>
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div id={scss.DetailsProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imageWrapper}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={scss.info}>
            <h1>{product.name}</h1>
            <h3>Цена: {product.price} $</h3>
            <h4>Категория: {product.category}</h4>

            <p>
              {isExpanded
                ? product.description
                : getShortDescription(product.description)}

              {product.description.split(" ").length > 30 && (
                <button
                  onClick={() => dispatch(toggleDescription(product._id))}
                  className={scss.learnMoreBtn}
                >
                  {isExpanded ? "Скрыть" : "Подробнее"}
                </button>
              )}
            </p>

            <button className={scss.addToCartBtn}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
