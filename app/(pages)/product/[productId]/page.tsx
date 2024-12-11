"use client";

import { useParams } from "next/navigation";
import ImagesSlider from "./ui/imagesSlider/ImagesSlider";
import "./style.scss";

const page = () => {
  const { productId } = useParams();

  return (
    <>
      <main className="productDerails">
        <div className="container">
          <section className="productMainDetails">
            <section className="productImages">
              <ImagesSlider />
            </section>
            <section className="productInfo">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, maxime dolorem, voluptatibus porro numquam dolorum
                sunt pariatur ipsam aliquam laborum iure ea temporibus
                laudantium incidunt rem ut nobis. Enim, numquam.
              </h1>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
