import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../Components/Layout/LayOut";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import '../../Components/Product/Product.css'
import ProductCard from "../../Components/Product/ProductCard";
function Result() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
      });
  }, [categoryName]); 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className = "products_container">
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}
export default Result;
