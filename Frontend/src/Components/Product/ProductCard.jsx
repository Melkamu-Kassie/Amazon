import React from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import Currency from "../Currency/Currency";
import { Link } from "react-router-dom";

// flex እና renderDesc እዚህ ጋር ተጨምረዋል
function ProductCard({ product, flex, renderDesc }) {
  const { title, image, id, price, rating, description } = product || {};

  return (
    // ቀደም ሲል በተነጋገርነው መሰረት className በባክቲክስ ዳይናሚክ ተደርጓል
    <div className={`product_card ${flex ? "product__flexed" : ""}`}>
      <Link to={`/products/${id}`} className="product_image_link">
        <img src={image} alt={title} className="product_image" />
      </Link>
      <div className="product_info">
        <h3 className="product_title">{title}</h3>

        {renderDesc && (
          <div
            className="product_description"
            style={{ width: "100%", color: "#555", lineHeight: "1.6" }}
          >
            {description}
          </div>
        )}

        <div className="product_rating_container">
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small className="product_rating_count">{rating?.count}</small>
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