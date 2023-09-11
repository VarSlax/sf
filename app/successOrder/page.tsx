"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessOrder = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => push("/"), 5000);
  });

  return (
    <div className="">
      <div className="mx-4 my-52 rounded-3xl border border-golden bg-order-card-bg px-3 py-1 text-center text-3xl font-semibold text-golden backdrop-blur-sm">
        Дякуємо за довіру! Ми зв'яжемося з вами найближчим часом
      </div>
    </div>
  );
};

export default SuccessOrder;
