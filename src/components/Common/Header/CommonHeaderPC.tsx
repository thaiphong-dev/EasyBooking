import Image from "next/image";
import React from "react";
import SearchBar from "../SearchBar";
import { useTranslation } from "react-i18next";

export default function CommonHeaderPC() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-[1200px]">
        <div className="flex justify-start items-center space-x-[25px] w-fit">
          <div className="w-[100px] aspect-square relative">
            <Image
              src="/images/common/logo1.png"
              alt="logo"
              fill
              sizes="auto"
            />
          </div>

          <div className="flex justify-start items-end space-x-[10px]">
            <div className="w-[20px] aspect-square relative">
              <Image
                src="/images/icons/Customer support.svg"
                alt="Customer support"
                fill
                sizes="auto"
              />
            </div>
            <p className="text-[13px]">
              HOTLINE:{" "}
              <span className="font-bold text-color-main">
                0377612701 | 0949680148
              </span>
            </p>
          </div>
        </div>
        <div className="w-3/6">
          <SearchBar />
        </div>

        <div className="flex justify-end space-x-[16px] items-center w-1/5 text-[10px] font-semibold pt-1">
          <div className="flex justify-center items-center flex-col space-y-[5px] cursor-pointer">
            <div className="border-gray-300 border p-1 rounded-full w-fit aspect-square">
              <div className="w-[20px] aspect-square relative">
                <Image
                  src="/images/icons/Notification fill.svg"
                  alt="Notification"
                  fill
                  sizes="auto"
                />
              </div>
            </div>
            <p className="uppercase">{t("Notice")}</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-[5px] cursor-pointer">
            <div className="border-gray-300 border p-1 rounded-full w-fit aspect-square">
              <div className="w-[20px] aspect-square relative">
                <Image
                  src="/images/icons/User fill.svg"
                  alt="User"
                  fill
                  sizes="auto"
                />
              </div>
            </div>
            <p className="uppercase">{t("Profile")}</p>
          </div>

          <div className="flex justify-center items-center flex-col space-y-[5px] cursor-pointer">
            <div className="border-gray-300 border p-1 rounded-full w-fit aspect-square">
              <div className="w-[20px] aspect-square relative">
                <Image
                  src="/images/icons/Cart.svg"
                  alt="Cart"
                  fill
                  sizes="auto"
                />
              </div>
            </div>
            <p className="uppercase">{t("Cart")}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-color-main p-2 text-white px-[200px]">
        <div className="flex justify-around items-center w-full text-[17px] font-semibold">
          <p className="cursor-pointer">{t("Home")} </p>
          <p className="cursor-pointer">{t("Products")}</p>
          <p className="cursor-pointer">{t("Booking")}</p>
          <p className="cursor-pointer">{t("Guidelines")}</p>
          <p className="cursor-pointer">{t("About us")}</p>
        </div>
      </div>
    </div>
  );
}
