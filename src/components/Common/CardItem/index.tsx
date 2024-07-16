import { formatNumberWithDots } from "@/utils/Common";
import Image from "next/image";
import React from "react";

interface Props {
  imageLink: string;
  title: string;
  price: string;
}
export default function CardItem({ imageLink, price, title }: Props) {
  return (
    <div className="bg-white shadow-item-shadow rounded-[20px] p-[10px] w-[150px] h-[200px]">
      <div className="w-[128px] h-[104px] relative">
        <Image
          src={imageLink}
          fill
          sizes="auto"
          alt="product"
          className="rounded-t-[10px]"
        />
      </div>
      <div>
        <p className="line-clamp-2 font-semibold">{title}</p>
      </div>
      <div className="w-fit fixed bottom-5 right-5">
        <p className="font-semibold text-[14px] text-background-red ">
          {formatNumberWithDots(price)} <span>đ</span>
        </p>
      </div>
    </div>
  );
}
