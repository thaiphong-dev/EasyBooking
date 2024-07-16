import React from "react";
import Banner from "../Common/Banner";
import NewestList from "./NewestList";
import BookingList from "./BookingList";

export default function HomePage() {
  return (
    <div className="bg-background-MO xl:bg-white min-h-screen h-full space-y-[20px]">
      <Banner />
      <NewestList />
      <BookingList />
    </div>
  );
}
