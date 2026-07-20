import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {/* እዚህ ጋ flex={true} እና renderDesc={true} ጨምረናል */}
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
