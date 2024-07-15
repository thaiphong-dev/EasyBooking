import Image from "next/image";
import React from "react";

export default function HomeHeaderMO() {
  return (
    <div className="flex justify-between items-center px-[15px] pt-[35px]">
      <div className="w-[18px] aspect-square relative">
        <Image
          src="/images/icons/Humberger.svg"
          fill
          sizes="auto"
          alt="humberger"
        />
      </div>

      <div className="flex justify-start items-center space-x-[10px]">
        <div className="w-[18px] aspect-square relative">
          <Image
            src="/images/icons/Location green.svg"
            fill
            sizes="auto"
            alt="Location"
          />
        </div>
        <p className="text-[14px] font-semibold">Gò Vấp, Hồ Chí Minh</p>
      </div>

      <div className="w-[24px] aspect-square relative">
        <Image
          src="/images/icons/Notification.svg"
          fill
          sizes="auto"
          alt="Location"
        />
      </div>
    </div>
  );
}
