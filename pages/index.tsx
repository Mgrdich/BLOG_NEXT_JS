import type {NextPage} from 'next'
import Hero from "../components/pages-component/home-page/Hero";
import FeaturedPosts from "../components/pages-component/home-page/FeaturedPosts";
import {POSTS} from "../dummy/data";
import {postDetails} from "../types/posts";
import Lib_Posts from "../util/Lib_Posts";

const HomePage: NextPage = () => {
    return (
        <>
            <Hero/>
            <FeaturedPosts posts={POSTS}/>
        </>
    )
};

export async function getStaticProps() {
    const featuredPosts: postDetails = await Lib_Posts.getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    };
}

export default HomePage
