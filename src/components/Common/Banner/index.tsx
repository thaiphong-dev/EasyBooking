import Image from "next/image";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center items-center xl:block p-5 xl:p-0">
      <div className="h-[500px] hidden xl:block">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="w-full h-[500px]">
              <Image
                src="/images/banners/banner.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[500px]">
              <Image
                src="/images/banners/banner1.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[500px]">
              <Image
                src="/images/banners/banner2.webp"
                fill
                sizes="auto"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[500px]">
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

      <div className="h-[170px] space-y-[15px] sm:h-[220px] md:h-[270px]  w-full px-[20px] rounded-[20px] xl:hidden">
        <Swiper
          onSlideChange={(e) => setActiveIndex(e?.activeIndex)}
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
        </Swiper>

        <div className="w-full justify-center items-center">
          <Swiper className="mySwiper w-fit">
            {Array.from({ length: 3 })?.map((_, index) => (
              <SwiperSlide className="!m-0 !w-fit !mr-2" key={index}>
                <div
                  style={{
                    backgroundColor:
                      activeIndex === index ? "#32B768" : "#E2E2E2",
                  }}
                  className="w-[9px] aspect-square bg-color-main rounded-full"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
