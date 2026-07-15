import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="category_card">
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} className="category_image" />
        <p className="category_shop_now">Shop Now!</p>
      </a>
    </div>
  );
}

export default CategoryCard;
