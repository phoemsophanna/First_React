import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { products_use } from "./Context";
import loadings from "../assets/loading.gif";

const Accessories = () => {
  const { toggleHandler } = products_use();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname]);
  const allData = useLoaderData().products;
  return (
    <div className="container-product">
      <h1 className="title">All Accessories</h1>
      <div className="row" style={loading ? { display: "none" } : null}>
        {allData.map((u) => {
          return (
            <div className="product-card" key={u.id}>
              <div className="container-img">
                <span
                  style={{
                    backgroundImage: `url(${u.thumbnail})`,
                  }}
                ></span>
              </div>
              <h1>
                <Link onClick={toggleHandler}>{u.title}</Link>
              </h1>
              <span>{u.category}</span>
              <h2>${u.price}</h2>
            </div>
          );
        })}
      </div>
      <div className="loading" id={!loading ? "active" : null}>
        <img src={loadings} alt="" />
      </div>
    </div>
  );
};

export const dataAccessories = async () => {
  const data = await fetch("https://dummyjson.com/products");
  return data.json();
};

export default Accessories;
