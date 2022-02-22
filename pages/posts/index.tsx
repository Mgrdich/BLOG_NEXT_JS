import {GetStaticProps, NextPage} from "next";
import AllPosts from "../../components/posts/AllPosts";
import {postDetails} from "../../types/posts";
import Lib_Posts_Server from "../../util/Lib_Posts_Server";
import Head from "next/head";

interface IStaticProps {
    posts: postDetails
}

const AllPostsPage: NextPage<IStaticProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>My Blog Posts</title>
                <meta name="description" content="Posts about the programming and nonsense"/>
            </Head>
            <AllPosts posts={posts}/>
        </>
    );
};

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {

    const posts: postDetails = await Lib_Posts_Server.getAllPosts();

    return {
        props: {
            posts: posts
        },
        revalidate: 60
    };
}

export default AllPostsPage;