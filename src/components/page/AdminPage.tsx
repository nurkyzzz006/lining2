import { FC, useEffect } from "react";
import scss from "./AdminPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { addData } from "../../store/slices/ItemSlice";
import { useAppDispatch } from "../../store/Store";

interface IForm {
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

const AdminPage: FC = () => {
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();
  const { handleSubmit, register, reset } = useForm<IForm>();

  async function readData() {
    try {
      const { data } = await axios.get(API);
      dispatch(addData(data.data));
    } catch (err) {
      console.log(err);
    }
  }

  const createData: SubmitHandler<IForm> = async (data) => {
    const newData: IForm = {
      image: data.image,
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
    };
    try {
      await axios.post(API, newData);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    readData();
  }, []);
  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inputs}>
            <form onSubmit={handleSubmit(createData)}>
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="image"
              />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
              />
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
              />
              <input
                {...register("category", { required: true })}
                type="text"
                placeholder="category"
              />
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder="description"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
