"use client";

import { useParams } from "next/navigation";
import './style.scss'

const page = () => {
  const { productId } = useParams();

  return <>
  <h1>Product Details </h1>
  <h2>product number {productId}</h2>
  </>;
};

export default page;
