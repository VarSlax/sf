"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

const SuccessOrder = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => push("/"), 5000);
  });

  return (
    <>
      <Header />
      <div className="">
        <div className="my-52 mx-4 py-1 px-3 bg-order-card-bg rounded-3xl border border-golden backdrop-blur-sm text-center text-3xl font-semibold text-golden">
          Дякуємо за довіру! Ми зв'яжемося з вами найближчим часом
        </div>
      </div>
    </>
  );
};

export default SuccessOrder;
