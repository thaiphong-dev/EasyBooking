import CardItem from "@/components/Common/CardItem";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BookingList() {
  const { t } = useTranslation();
  const mock = [
    {
      imageLink: "/images/test/product.webp",
      price: "2500000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product1.webp",
      price: "4580000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product2.webp",
      price: "1788000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product3.webp",
      price: "1700000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product.webp",
      price: "2500000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product1.webp",
      price: "4580000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product2.webp",
      price: "1788000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
    {
      imageLink: "/images/test/product3.webp",
      price: "1700000",
      title:
        " Giày cầu lông Mizuno Thunder Blade Z - Trắng đỏ vàng chính hãng (V1GA237045)",
    },
  ];
  return (
    <div className="space-y-[10px] pl-[20px]">
      <div className="flex justify-between items-center pr-[10px]">
        <div>
          <p className="font-semibold text-[16px]">{t("Booking Courts")}</p>
          <p className="font-semibold text-[12px] text-text-color-gray">
            {t("Today's list of bookable courts")}
          </p>
        </div>
        <div className="flex justify-start items-center space-x-[5px]">
          <p className="text-[12px] text-text-color-gray font-semibold ">
            {t("See All")}
          </p>
          <div className="w-[13px] aspect-square relative">
            <Image
              src="/images/icons/Right Arrow gray.svg"
              alt="arrow"
              fill
              sizes="auto"
            />
          </div>
        </div>
      </div>
      <Swiper slidesPerView={"auto"}>
        {mock?.map((x, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <CardItem {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
