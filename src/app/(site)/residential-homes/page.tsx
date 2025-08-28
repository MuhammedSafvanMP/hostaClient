import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
import { useAppContext } from "@/context/AppContext";
export const metadata: Metadata = {
  title: "Property List | Hostay",
};

const Page = () => {
  const { search, setSearch, filter, setFilter } = useAppContext();

  return (
    <>
      <HeroSub
        title="Residential Homes."
        description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
        // badge="Properties"
        setFilter={setFilter}
        setSearch={setSearch}
        search={search}
      />
      <ResidentialList />
    </>
  );
};

export default Page;
