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
      <div className="mx-4 my-12 flex flex-col rounded-3xl border border-golden bg-order-card-bg backdrop-blur-sm">
        <div className="m-2 flex justify-end">
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
              className="mb-2 mt-4 w-full rounded-2xl border border-golden bg-order-card-bg px-4 py-2 text-base font-extralight"
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
              className="my-2 w-full rounded-2xl border border-golden bg-order-card-bg px-4 py-2 text-base font-extralight"
            />
            <ErrorMessage errors={errors} name="phoneNumber" />
            <input
              type="text"
              {...register("date", { maxLength: 100 })}
              placeholder="Орієнтовний час дзвінка"
              className="my-2 w-full rounded-2xl border border-golden bg-order-card-bg px-4 py-2 text-base font-extralight"
            />
            <input
              type="text"
              {...register("comment", { maxLength: 300 })}
              placeholder="Коментар"
              className="my-2 w-full rounded-2xl border border-golden bg-order-card-bg px-4 py-2 text-base font-extralight"
            />
            <button
              type="submit"
              className="mb-10 mt-2 w-full cursor-pointer rounded-3xl bg-golden px-8 py-0.5 text-xl font-semibold text-black "
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
