import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  return (
    <div className="flex justify-center items-center xl:block p-5 xl:p-0">
      <div className="h-[510px] hidden xl:block">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="w-full h-[510px]">
              <Image
                src="/images/banners/banner.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[510px]">
              <Image
                src="/images/banners/banner1.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[510px]">
              <Image
                src="/images/banners/banner2.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[510px]">
              <Image
                src="/images/banners/banner3.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full px-[20px] rounded-[20px] xl:hidden">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide className="rounded-[20px]">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] ">
              <Image
                src="/images/banners/banner.webp"
                fill
                sizes="auto"
                alt="banner"
                className="rounded-[20px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px]">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px]">
              <Image
                src="/images/banners/banner1.webp"
                fill
                className="rounded-[20px]"
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px]">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px]">
              <Image
                src="/images/banners/banner2.webp"
                fill
                className="rounded-[20px]"
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px]">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] ">
              <Image
                src="/images/banners/banner3.webp"
                fill
                className="rounded-[20px]"
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
