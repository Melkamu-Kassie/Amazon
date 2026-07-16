import React from "react";
import "./Category.css";
import { Link } from "react-router-dom"; // useParams እዚህ አያስፈልግም

function CategoryCard({ data }) {
  return (
    <div className="category_card">
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} className="category_image" />
        <p className="category_shop_now">Shop Now!</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
