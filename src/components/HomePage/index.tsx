import React from "react";
import Banner from "../Common/Banner";
import NewestList from "./NewestList";
import BookingList from "./BookingList";
import PromoList from "./PromoList";

export default function HomePage() {
  return (
    <div className="bg-background-MO xl:bg-white min-h-screen h-full space-y-[20px]">
      <Banner />
      <PromoList />
      <NewestList />
      <BookingList />
    </div>
  );
}
