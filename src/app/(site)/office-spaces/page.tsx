import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
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
                title="Office Spaces."
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                // badge="Properties"
                   setFilter={setFilter}
        setSearch={setSearch}
        search={search}
            />
            <OfficeSpace />
        </>
    );
};

export default Page;