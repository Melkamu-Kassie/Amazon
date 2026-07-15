import React from "react";

function ProductCard({ product }) {
  // ከ product object ውስጥ የሚያስፈልጉትን መረጃዎች እናወጣለን
  const { title, image, price, rating } = product || {};

  return (
    <div className="product_card">
      {/* የምስል ክፍል */}
      <a href="" className="product_image_link">
        <img src={image} alt={title} className="product_image" />
      </a>

      {/* የምርት መረጃዎች መያዣ */}
      <div className="product_info">
        {/* የምርት ርዕስ */}
        <h3 className="product_title">{title}</h3>

        {/* ደረጃ (Rating) ክፍል */}
        <div className="product_rating_container">
          {/* ኮከቦችን በቁጥር ልክ ለመስራት */}
          <span className="product_stars">
            {"⭐".repeat(Math.round(rating?.rate || 0))}
          </span>
          {/* የገምጋሚዎች ብዛት */}
          <span className="product_rating_count">({rating?.count})</span>
        </div>

        {/* ዋጋ (Price) ክፍል */}
        <div className="product_price_container">
          <small className="price_currency">$</small>
          <span className="price_amount">{price}</span>
        </div>

        {/* ወደ ካርት መጨመሪያ ቁልፍ */}
        <button className="product_add_btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
