"use client";

import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";


const page = () => {


 const { search, setSearch, filter, setFilter } = useAppContext();
    

    return (
        <>
            <HeroSub
                title="Book Direct"
                description="Contact trusted owners directly without middlemen"
                setFilter={setFilter}
                setSearch={setSearch}
                 search={search}
            />
            <PropertiesListing filter= {filter} search={search} />
        </>
    );
};

export default page;
