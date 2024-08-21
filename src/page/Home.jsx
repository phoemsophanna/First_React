import { Link, useLoaderData, useLocation } from "react-router-dom";
import loadings from "../assets/loading.gif";
import { useEffect, useState } from "react";
import { products_use } from "./Context";
import Slider from "../components/Slider";
import { slideData } from "../assets/slide";

const Home = () => {
  const { toggle, toggleHandler } = products_use();
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const item = slideData.find((q) => q.id == 1);
    setSlider(item);
  }, [location.pathname]);
  function getSlide(id) {
    const item = slideData.find((q) => q.id == id);
    setSlider(item);
  }
  return (
    <div className="container-product">
      <Slider {...slider} getSlide={getSlide} />
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
                <Link to={`home/` + u.id.toString()} onClick={toggleHandler}>
                  {u.title}
                </Link>
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
