"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import "./productCardStyle.scss";
import Image from "next/image";
import SkeletonLoder from "../skeleton/SkeletonLoder";
import { motion } from "framer-motion";

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

  const handleGoToProduct = (e: MouseEvent<HTMLDivElement>) => {
    if (
      favoriteIconRef.current &&
      favoriteIconRef.current.contains(e.target as Node)
    )
      return;
  };

  return (
    <>
      {isDataLoaded ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50, x: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: "tween", delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.7 }}
            className="card"
            onClick={(e) => handleGoToProduct(e)}
          >
            <div className="image">
              <div
                className="favoritIcon"
                ref={favoriteIconRef}
                onClick={handleToggleFavorite}
              >
                {isFavorite ? <IoHeart /> : <IoMdHeartEmpty />}
              </div>
              <Image
                width={295}
                height={300}
                src={product?.image}
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
              <div className="price">{product.price}</div>
            </div>
          </motion.div>
        </>
      ) : (
        <SkeletonLoder />
      )}
    </>
  );
};

export default ProductCard;
