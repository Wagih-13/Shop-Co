"use client";

import { useParams } from "next/navigation";
import ImagesSlider from "./ui/imagesSlider/ImagesSlider";
import ProductInfo from "./ui/productInfo/ProductInfo";
import "./style.scss";

const page = () => {
  const { productId } = useParams();

  return (
    <>
      <main className="productDerails">
        <div className="container">
          <section className="productMainDetails">
            <section className="productImages">
              <ImagesSlider productImages={null} />
            </section>
            <section className="productInfo">
              <ProductInfo />
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
