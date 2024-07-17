import PromoCard from "@/components/Common/PromoCard";
import { title } from "process";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PromoList() {
  const { t } = useTranslation();
  const mock = [
    {
      imageLink: "/images/icons/Calendar.svg",
      title: t("Easy court bookings"),
      content: t("Book your courts in just a few clicks."),
    },
    {
      imageLink: "/images/icons/Policy.svg",
      title: t("Quality guarantee"),
      content: t("Purchase products of the highest quality."),
    },
    {
      imageLink: "/images/icons/Payment.svg",
      title: t("Secure payment"),
      content: t("Your transactions are safe with us."),
    },
    {
      imageLink: "/images/icons/Customer support1.svg",
      title: t("Customer support"),
      content: t("Get assistance whenever you need it"),
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[20px]">
      {mock?.map((x, index) => (
        <PromoCard key={index} {...x} />
      ))}
    </div>
  );
}
