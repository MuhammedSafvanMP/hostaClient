import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { useAppContext } from "@/context/AppContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Blog Grids | Hostay ",
};

const Blog = () => {
      const { search, setSearch, filter, setFilter } = useAppContext();
    
    return (
        <>
            <HeroSub
                title="Real estate insights."
                description="Stay ahead in the property market with expert advice and updates."
                // badge="Blog"
        setFilter={setFilter}
        setSearch={setSearch}
        search={search}
            />
            <BlogList />
        </>
    );
};

export default Blog;
