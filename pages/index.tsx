import type {NextPage} from 'next'
import Hero from "../components/pages-component/home-page/Hero";
import FeaturedPosts from "../components/pages-component/home-page/FeaturedPosts";
import {postsType} from "../types/components/posts";


const posts: postsType = [
    {
        id: '1',
        header: 'Header1',
        time: "10-10-2011",
        slug: "/",
        paragraph: "some long text is working here"
    },
    {
        id: '2',
        header: 'Header2',
        time: "10-10-2013",
        slug: "/",
        paragraph: "some long text is working here"
    }
];

const HomePage: NextPage = () => {
    return (
        <>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </>
    )
};

export default HomePage
