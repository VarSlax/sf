"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Header from "../components/Header";
import Image from "next/image";
import closeIcon from "public/cards/close-icon.svg";

interface FormInputs {
  name: string;
  date: string;
  comment: string;
  phoneNumber: number;
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
    console.log(data);
    return push("/successOrder");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col my-12 mx-4 bg-order-card-bg rounded-3xl border border-golden backdrop-blur-sm">
        <div className="flex justify-end m-2">
          <Image onClick={() => push("/")} src={closeIcon} alt="no image" />
        </div>
        <div className="m-2 text-center text-xl font-semibold text-golden">
          Хочете почати тренуватися? Замовте дзвінок та дізнайтеся, як швидко
          досягнути бажаних результатів
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Як до Вас звертатись?*"
              {...register("name", {
                required:
                  "Iм'я має бути не менше ніж 2 літери та містити букви.",
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
              className="w-full mt-4 px-4 mb-2 py-2 text-base bg-order-card-bg rounded-2xl border border-golden font-extralight"
            />
            <ErrorMessage errors={errors} name="name" />
            <input
              type="tel"
              placeholder="Номер телефону*"
              {...register("phoneNumber", {
                required:
                  "У номері телефону мають бути лише цифри та його довжина має бути 10 символів",
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message:
                    "У номері телефону мають бути лише цифри та його довжина має бути 10 символів",
                },
              })}
              className="w-full my-2 px-4 py-2 text-base bg-order-card-bg rounded-2xl border border-golden font-extralight"
            />
            <ErrorMessage errors={errors} name="phoneNumber" />
            <input
              type="text"
              {...register("date", { maxLength: 100 })}
              placeholder="Орієнтовний час дзвінка"
              className="w-full my-2 px-4 py-2 text-base bg-order-card-bg rounded-2xl border border-golden font-extralight"
            />
            <input
              type="text"
              {...register("comment", { maxLength: 300 })}
              placeholder="Коментар"
              className="w-full my-2 px-4 py-2 text-base bg-order-card-bg rounded-2xl border border-golden font-extralight"
            />
            <button
              type="submit"
              className="w-full mt-2 mb-10 px-8 py-0.5 text-black text-xl font-semibold bg-golden rounded-3xl cursor-pointer "
            >
              Замовити дзвінок
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
