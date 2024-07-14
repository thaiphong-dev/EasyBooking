import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FooterMO() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="xl:hidden absolute bottom-0 w-full py-4 rounded-t-[40px] px-[10px] bg-white drop-shadow-lg flex justify-between items-center border-t-[2px]">
      <Link
        className=" flex flex-col justify-center items-center text-[12px] font-medium"
        href={"/"}
      >
        <div className="w-[24px] aspect-square relative">
          {router.pathname === "/" ? (
            <Image
              src="/images/icons/house fill.svg"
              fill
              sizes="auto"
              alt="home"
            />
          ) : (
            <Image src="/images/icons/house.svg" fill sizes="auto" alt="home" />
          )}
        </div>
        <div>
          <p
            className={`${
              router.pathname === "/" ? "text-color-main font-semibold" : ""
            }`}
          >
            {t("Home")}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col justify-center items-center text-[12px] font-medium"
        href={"/products"}
      >
        <div className="w-[24px] aspect-square relative">
          {router.pathname === "/products" ? (
            <Image
              src="/images/icons/Product filled.svg"
              fill
              sizes="auto"
              alt="home"
            />
          ) : (
            <Image
              src="/images/icons/Product.svg"
              fill
              sizes="auto"
              alt="home"
            />
          )}
        </div>
        <div>
          <p
            className={`${
              router.pathname === "/products"
                ? "text-color-main font-semibold"
                : ""
            }`}
          >
            {t("Products")}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col justify-center items-center text-[12px] font-medium"
        href={"/booking"}
      >
        <div className="w-[24px] aspect-square relative">
          {router.pathname === "/booking" ? (
            <Image
              src="/images/icons/Pencil fill.svg"
              fill
              sizes="auto"
              alt="Booking"
            />
          ) : (
            <Image
              src="/images/icons/Pencil.svg"
              fill
              sizes="auto"
              alt="Booking"
            />
          )}
        </div>
        <div>
          <p
            className={`${
              router.pathname === "/booking"
                ? "text-color-main font-semibold"
                : ""
            }`}
          >
            {t("Booking")}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col justify-center items-center text-[12px] font-medium"
        href={"/cart"}
      >
        <div className="w-[24px] aspect-square relative">
          {router.pathname === "/cart" ? (
            <Image
              src="/images/icons/wallet fill.svg"
              fill
              sizes="auto"
              alt="wallet"
            />
          ) : (
            <Image
              src="/images/icons/wallet.svg"
              fill
              sizes="auto"
              alt="wallet"
            />
          )}
        </div>
        <div>
          <p
            className={`${
              router.pathname === "/cart" ? "text-color-main font-semibold" : ""
            }`}
          >
            {t("Cart")}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col justify-center items-center text-[12px] font-medium"
        href={"/profile"}
      >
        <div className="w-[24px] aspect-square relative">
          {router.pathname === "/profile" ? (
            <Image
              src="/images/icons/user fill.svg"
              fill
              sizes="auto"
              alt="user"
            />
          ) : (
            <Image src="/images/icons/user.svg" fill sizes="auto" alt="user" />
          )}
        </div>
        <div>
          <p
            className={`${
              router.pathname === "/profile"
                ? "text-color-main font-semibold"
                : ""
            }`}
          >
            {t("Profile")}
          </p>
        </div>
      </Link>
    </div>
  );
}
