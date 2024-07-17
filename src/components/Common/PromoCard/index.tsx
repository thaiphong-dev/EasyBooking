import Image from "next/image";
import React from "react";

interface Props {
  imageLink: string;
  title: string;
  content: string;
}
export default function PromoCard({ content, imageLink, title }: Props) {
  return (
    <div className="text-[12px] space-y-[5px] border rounded-[10px] min-h-[85px] p-[10px] w-full text-center text-color-main md:flex justify-center items-center md:space-x-[10px]  md:text-left">
      <div className="flex justify-center items-center">
        <div className="w-[25px] md:w-[35px] aspect-square relative flex justify-center items-center flex-col xl:flex-row">
          <Image src={imageLink} fill sizes="auto" alt="promo" />
        </div>
      </div>
      <div>
        <p className="font-bold capitalize ">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
