import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
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
                title="Luxury Villas."
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                // badge="Properties"
                   setFilter={setFilter}
        setSearch={setSearch}
        search={search}
            />
            <LuxuryVillas />
        </>
    );
};

export default Page;