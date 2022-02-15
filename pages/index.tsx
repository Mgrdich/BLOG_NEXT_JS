import type {GetStaticProps, NextPage} from 'next'
import Hero from "../components/pages-component/home-page/Hero";
import FeaturedPosts from "../components/pages-component/home-page/FeaturedPosts";
import {postDetails} from "../types/posts";
import Lib_Posts_Server from "../util/Lib_Posts_Server";

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

    const featuredPosts: postDetails = await Lib_Posts_Server.getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
};

export default HomePage
