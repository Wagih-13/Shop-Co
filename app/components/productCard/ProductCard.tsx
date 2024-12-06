"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import "./productCardStyle.scss";
import Image from "next/image";
import SkeletonLoder from "../skeleton/SkeletonLoder";
import { animate, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  index: number;
  product?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ index, product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const favoriteIconRef = useRef<HTMLDivElement>(null);
  const isDataLoaded = true; // TODO : this line for testing only
  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  const router = useRouter();

  const handleGoToProduct = (e: MouseEvent<HTMLDivElement>) => {
    if (
      favoriteIconRef.current &&
      favoriteIconRef.current.contains(e.target as Node)
    )
      return;
    router.push(`/product/${Math.random()}`);
  };

  const secondPhoto = useRef(null);

  return (
    <>
      {isDataLoaded ? (
        <>
          <div className="productCard" onClick={(e) => handleGoToProduct(e)}>
            <div
              className="image"
              onMouseEnter={() => {
                if (window.innerWidth >= 769) {
                  animate(
                    secondPhoto.current,
                    { opacity: 1 },
                    { duration: 0.3 }
                  );
                }
              }}
              onTouchEnd={() => {
                if (window.innerWidth <= 768) {
                  animate(
                    secondPhoto.current,
                    { opacity: 0 },
                    { duration: 0.3 }
                  );
                }
              }}
              onTouchStart={() => {
                if (window.innerWidth <= 768) {
                  animate(
                    secondPhoto.current,
                    { opacity: 1 },
                    { duration: 0.3 }
                  );
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 769) {
                  animate(
                    secondPhoto.current,
                    { opacity: 0 },
                    { duration: 0.3 }
                  );
                }
              }}
            >
              <aside className="actionsBar">
                <div
                  className="favoritIcon"
                  ref={favoriteIconRef}
                  onClick={handleToggleFavorite}
                >
                  {isFavorite ? <IoHeart /> : <IoMdHeartEmpty />}
                </div>
              </aside>

              <div className="addToCartButton">
                <button>Add To Cart</button>
              </div>

              <Image
                className="firstPhoto"
                width={295}
                height={300}
                src="/images/image 2.webp"
                alt="product"
              />
              <Image
                className="secondPhoto"
                ref={secondPhoto}
                width={295}
                height={300}
                src="/images/image 3.webp"
                alt="product"
              />
            </div>
            <div className="content">
              <h4>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
              <p>{product.description.split(" ").slice(0, 6).join(" ")}</p>
              <span className="rating">
                <FaStar />
                <FaStar />
              </span>
              <div className="price">
                <span className="afterSale">{product.price} EGP</span>
                <span className="beforSale">{product.price} EGP</span>
                <span className="salePecanteage">-20%</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SkeletonLoder />
      )}
    </>
  );
};

export default ProductCard;
