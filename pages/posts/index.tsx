import {NextPage} from "next";
import AllPosts from "../../components/posts/AllPosts";
import {POSTS} from "../../dummy/data";
import {postDetails} from "../../types/posts";
import Lib_Posts from "../../util/Lib_Posts";

const AllPostsPage: NextPage = () => {
    return (
        <AllPosts posts={POSTS}/>
    );
};

export async function getStaticProps() {
    const allPosts: postDetails = await Lib_Posts.getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 60
    };
}

export default AllPostsPage;