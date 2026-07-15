import React from "react";
import { categoryInfos } from "./Categoryfullinfos";
import CategoryCard from "./CategoryCard";
import "./Category.css";

function Category() {
  return (
    // እዚህ ጋር className ጨምረናል
    <section className="category_container">
      {categoryInfos.map((categoryInfo) => (
        <CategoryCard key={categoryInfo.name} data={categoryInfo} />
      ))}
    </section>
  );
}

export default Category;
