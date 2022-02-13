import type {NextPage} from 'next'
import Hero from "../components/pages-component/home-page/Hero";
import FeaturedPosts from "../components/pages-component/home-page/FeaturedPosts";
import {postsType} from "../types/components/posts";
import {POSTS} from "../dummy/data";




const HomePage: NextPage = () => {
    return (
        <>
            <Hero/>
            <FeaturedPosts posts={POSTS}/>
        </>
    )
};

export default HomePage
