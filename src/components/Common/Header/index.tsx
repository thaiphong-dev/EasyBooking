import React from "react";
import HomeHeaderMO from "./HomeHeaderMO";
import SearchBar from "../SearchBar";
import CommonHeaderPC from "./CommonHeaderPC";

export default function Header() {
  return (
    <div>
      <div className="space-y-[20px] xl:hidden">
        <HomeHeaderMO />
        <SearchBar />
      </div>

      <div className="space-y-[20px] hidden xl:block">
        <CommonHeaderPC />
        {/* <SearchBar /> */}
      </div>
    </div>
  );
}
