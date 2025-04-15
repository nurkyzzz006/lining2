import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { editData } from "../../../../store/slices/ItemSlice";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("image", { required: true })} />
      <input {...register("name", { required: true })} />
      <input type="number" {...register("price", { required: true })} />
      <input {...register("category", { required: true })} />
      <textarea {...register("description", { required: true })} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProduct;
