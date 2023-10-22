"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import closeIcon from "public/cards/close-icon.svg";

interface FormInputs {
  name: string;
  phone: number;
  singleErrorInput: string;
}

const OrderPage = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    try {
      fetch("https://justfit-gold-backend.vercel.app", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch {}

    return push("/successOrder");
  };

  return (
    <div className="mx-5 my-12 flex max-w-2xl flex-col border border-golden bg-order-card-bg p-3 backdrop-blur-sm md:mx-auto">
      <div className="m-2 flex justify-end">
        <Image
          onClick={() => push("/")}
          src={closeIcon}
          alt="no image"
          className="cursor-pointer hover:animate-spin"
        />
      </div>
      <div className="m-2 text-center text-xl font-semibold text-golden">
        Хочете почати тренуватися? Замовте дзвінок та дізнайтеся, як швидко
        досягнути бажаних результатів
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Як до Вас звертатись?"
            {...register("name", {
              required: "Iм'я має бути не менше ніж 2 літери та містити букви.",
              pattern: {
                value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                message:
                  "Iм'я має бути не менше ніж 2 літери та містити букви.",
              },
              minLength: {
                value: 2,
                message:
                  "Iм'я має бути не менше ніж 2 літери та містити букви.",
              },
            })}
            className="mb-2 mt-7 w-full -skew-x-[20deg] border border-golden bg-order-card-bg px-4 py-2.5 text-base font-extralight"
          />
          <ErrorMessage errors={errors} name="name" />
          <input
            type="tel"
            placeholder="Номер телефону: 123-456-78-99"
            {...register("phone", {
              required: "Будь ласка, введiть номер для зворотнього дзвiнка",
            })}
            className="my-2 w-full -skew-x-[20deg] border border-golden bg-order-card-bg px-4 py-2.5 text-base font-extralight"
          />
          <ErrorMessage errors={errors} name="phone" />
          <button
            type="submit"
            className="mb-2 mt-7 w-full -skew-x-[20deg] cursor-pointer bg-golden px-8 py-1.5 text-xl font-semibold text-main shadow shadow-golden hover:shadow-inner hover:shadow-main"
          >
            Замовити дзвінок
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
