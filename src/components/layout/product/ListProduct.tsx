import axios from "axios";
import { addData, searchData } from "../../../store/slices/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../../store/Store";

import scss from "./ListProduct.module.scss";
import { useEffect } from "react";

const ListProduct = () => {
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();

  const { data, search } = useAppSelector((s) => s.data);

  console.log(data, "data");

  async function readData() {
    try {
      const { data } = await axios.get(API);
      dispatch(addData(data.data));
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteData(id: number) {
    try {
      await axios.delete(`${API}/${id}`);
      readData();
    } catch (error) {
      console.log(error);
    }
  }

  //------search>
  function handleSearch(formData: string) {
    let result = data.filter((item) =>
      item.name.toLowerCase().includes(formData.toLowerCase())
    );
    dispatch(searchData(result));
  }
  //>>>>>>>>>>>>>
  useEffect(() => {
    readData();
  }, []);
  return (
    <div id={scss.ListProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.prodHeader}>
            <div className={scss.filter}>
              <p>
                <input type="radio" /> foots
              </p>
              <p>
                <input type="radio" /> clothes
              </p>
              <p>
                <input type="radio" /> t-shirt
              </p>
            </div>
            <div className={scss.search}>
              <input
                name="input"
                type="search"
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />

              <label className={scss.labelforsearch} htmlFor="input">
                <svg className="searchIcon" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className={scss.blocks}>
            {search.map((item, index) => (
              <div className={scss.block} key={index}>
                <img src={item.image} alt={item.name} />
                <div className={scss.texts}>
                  <h1>{item.name}</h1>
                  <p>{item.price}$</p>
                </div>
                <button>Add</button>
                <div className={scss.btns}>
                  <button onClick={() => deleteData(item._id)}>delete</button>
                  <button>edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
