import { FC, useEffect, useState } from "react";
import scss from "./Pagination.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import axios from "axios";
import { addData } from "../../../store/slices/ItemSlice";
import { useNavigate } from "react-router-dom";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination: FC = () => {
  const API = import.meta.env.VITE_API;
  const { data } = useAppSelector((s) => s.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const readData = async () => {
    let { data } = await axios.get(API);
    dispatch(addData(data.data));
  };

  useEffect(() => {
    readData();
  }, []);

  const count = Math.ceil(data.length / itemsPerPage);

  const paginatedData = () => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className={scss.Pagination}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            {paginatedData().map((item, index) => (
              <div key={index}>
                <div className={scss.food}>
                  <div
                    onClick={() => navigate(`/details/${item._id}`)}
                    className={scss.block}
                  >
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={scss.texts}>
                    <h1>{item.name}</h1>
                    <p>{item.price}$</p>
                    <h6>{item.category}</h6>
                  </div>
                  <button>Add</button>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.box}>
            <MuiPagination
              count={count}
              page={page}
              onChange={handleChange}
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
