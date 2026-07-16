import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Product.css"; // 1. CSS ፋይሉን እዚህ ጋር እናስገባዋለን

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ስህተት ከተፈጠረ ለመያዝ

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ዳታ በማምጣት ላይ ስህተት ተፈጥሯል: ", err);
        setError("ምርቶችን ማምጣት አልተቻለም። እባክዎ ኔትወርክዎን ያረጋግጡ!");
        setLoading(false);
      });
  }, []);

  // 2. ዳታው ተጭኖ እስኪያልቅ ይህንን ያሳያል
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px", fontSize: "1.2rem" }}>
        በመጫን ላይ...
      </div>
    );
  }

  // 3. የኔትወርክ ስህተት ካለ ይህንን ያሳያል
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red", padding: "40px" }}>
        {error}
      </div>
    );
  }

  return (
    // 4. ምርቶቹ በሥርዓት እንዲቀመጡ ክላስ ሰጥተነዋል
    <section className="products_container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Product;
