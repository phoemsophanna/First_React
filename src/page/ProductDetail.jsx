import { useEffect, useState } from "react";
import { useLocation, useLoaderData } from "react-router-dom";
import loadings from "../assets/loading.gif";

const ProductDetail = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname]);
  return (
    <>
      <h1 className="title">Product Detail</h1>
      <div
        className="container-detail"
        style={loading ? { display: "none" } : null}
      >
        <div className="container-image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="contain-detail">
          <h1>{data.title}</h1>
          <h2>${data.price}</h2>
          <p>{data.description}</p>
          <ul>
            <li>Category: {data.category}</li>
            <li>Rating: {data.rating.rate}</li>
            <li>Count: {data.rating.count}</li>
          </ul>
        </div>
      </div>
      <div className="loading" id={!loading ? "active" : null}>
        <img src={loadings} alt="" />
      </div>
    </>
  );
};

export const findUser = async ({ params }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + params.id);
  return res.json();
};

export default ProductDetail;
