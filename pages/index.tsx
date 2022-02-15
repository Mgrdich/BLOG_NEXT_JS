import type {GetStaticProps, NextPage} from 'next'
import Hero from "../components/pages-component/home-page/Hero";
import FeaturedPosts from "../components/pages-component/home-page/FeaturedPosts";
import {postDetails} from "../types/posts";

interface IStaticProps {
    posts: postDetails
}

const HomePage: NextPage<IStaticProps> = ({posts}) => {
    return (
        <>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </>
    )
};

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
    let Lib_Posts = require("../util/Lib_Posts_Server");
    const featuredPosts: postDetails = await Lib_Posts.getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
};

export default HomePage
