import React from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import Currency from "../Currency/Currency";
import {Link}  from "react-router-dom";
function ProductCard({ product }) {
  const { title, image, id, price, rating } = product || {};
  return (
    <div className="product_card">
      <Link to= {`/products/${id}`} className="product_image_link">
        <img src={image} alt={title} className="product_image" />
      </Link>
      <div className="product_info">
        <h3 className="product_title">{title}</h3>
        <div className="product_rating_container">
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small className="product_rating_count">{rating.count}</small>
        </div>
        <div className="product_price_container">
          <Currency amount={price} />
        </div>
        <button className="product_add_btn">Add to Cart</button>
      </div>
    </div>
  );
}
export default ProductCard;
