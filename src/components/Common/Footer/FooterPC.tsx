import Image from "next/image";
import React from "react";

export default function FooterPC() {
  return (
    <div className="hidden xl:flex justify-center items-center fixed bottom-0 h-fit text-[17px] w-full py-10 space-x-10 bg-background-green text-white ">
      <div className="w-[1200px] h-full flex justify-between items-start">
        <div className="space-y-[5px]">
          <p className="font-bold text-[35px] ">Easy Booking</p>
          <p>Giới thiệu về Easy Booking</p>
          <p>Chính sách bảo mật</p>
          <p>Điều khoản sử dụng</p>
        </div>

        <div className="h-[150px] w-[3px] rounded-[5px] bg-white"></div>

        <div className="space-y-[5px]">
          <p className="font-bold text-[20px]">Hỗ Trợ khách hàng</p>
          <p>
            Hotline: <span>0377612701</span>
          </p>
          <p>
            email: <span>thaiphong.dev@gmail.com</span>
          </p>
        </div>

        <div className="space-y-[5px]">
          <p className="font-bold text-[20px]">Hướng dẫn</p>
          <ul className="list-disc pl-[20px] space-y-[5px]">
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn đặt sân online</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Kiểm tra đơn hàng</li>
            <li>Kiểm tra thông tin đặt sân</li>
          </ul>
        </div>

        <div className=" flex justify-start items-center flex-col">
          <div className=" relative">
            <Image
              src="/images/footer/QRCode.svg"
              alt="qrcode"
              width={100}
              height={50}
            />
          </div>
          <div className="  relative">
            <Image
              src="/images/footer/appStore.svg"
              alt="appStore"
              width={100}
              height={50}
            />
          </div>
          <div className=" relative">
            <Image
              src="/images/footer/googlePlay.svg"
              alt="googlePlay"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
