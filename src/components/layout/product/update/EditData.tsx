import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { editData } from "../../../../store/slices/ItemSlice";
import scss from "./EditData.module.scss";

interface IForm {
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

const EditProduct = () => {
  const { id } = useParams();
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const product = useAppSelector((s) =>
    s.data.data.find((item) => item._id === Number(id))
  );

  const { register, handleSubmit, reset } = useForm<IForm>();

  // Подставляем данные в форму
  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        name: product.name,
        price: Number(product.price),
        category: product.category,
        description: product.description,
      });
    }
  }, [product]);

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    try {
      const { data } = await axios.put(`${API}/${id}`, formData);
      dispatch(editData(data.data));
      navigate("/product"); // Перенаправление назад
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };

  return (
    <div className={scss.EditData}>
      <div className="container">
      <div className={scss.inputs}>
        <h2>Edit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("image", { required: true })}
            placeholder="image"
          />
          <input {...register("name", { required: true })} placeholder="name" />
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="number"
          />
          <input
            {...register("category", { required: true })}
            placeholder="category"
          />
          <textarea
            {...register("description", { required: true })}
            placeholder="description"
          />
          <button type="submit">Save</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default EditProduct;
