import type {NextPage} from 'next'
import Hero from "../components/pages/home-page/Hero";
import FeaturedPosts from "../components/pages/home-page/FeaturedPosts";

const HomePage: NextPage = () => {
    return (
        <>
            <Hero/>
            <FeaturedPosts/>
        </>
    )
};

export default HomePage
