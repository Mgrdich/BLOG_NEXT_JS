import {GetStaticProps, NextPage} from "next";
import AllPosts from "../../components/posts/AllPosts";
import {postDetails} from "../../types/posts";
import Lib_Posts from "../../util/Lib_Posts_Server";

interface IStaticProps {
    posts: postDetails
}

const AllPostsPage: NextPage<IStaticProps> = ({posts}) => {
    return (
        <AllPosts posts={posts}/>
    );
};

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
    const allPosts: postDetails = await Lib_Posts.getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 60
    };
}

export default AllPostsPage;