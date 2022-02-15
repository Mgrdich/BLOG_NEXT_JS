import {GetStaticProps, NextPage} from "next";
import AllPosts from "../../components/posts/AllPosts";
import {postDetails} from "../../types/posts";
import Lib_Posts_Server from "../../util/Lib_Posts_Server";

interface IStaticProps {
    posts: postDetails
}

const AllPostsPage: NextPage<IStaticProps> = ({posts}) => {
    return (
        <AllPosts posts={posts}/>
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