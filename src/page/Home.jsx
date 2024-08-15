import { Link, useLoaderData, useLocation } from "react-router-dom";
import loadings from "../assets/loading.gif";
import { useEffect, useState } from "react";

const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname]);
  return (
    <div className="container-product">
      <h1 className="title">All Product</h1>
      <div className="row" style={loading ? { display: "none" } : null}>
        {data.map((u) => {
          return (
            <div className="product-card" key={u.id}>
              <div className="container-img">
                <span
                  style={{
                    backgroundImage: `url(${u.image})`,
                  }}
                ></span>
              </div>
              <h1>
                <Link to={u.id.toString()}>{u.title}</Link>
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

export const listUser = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default Home;
