import {NextPage} from "next";
import AllPosts from "../../components/posts/AllPosts";
import {POSTS} from "../../dummy/data";

const AllPostsPage: NextPage = () => {
    return (
        <>
            <AllPosts posts={POSTS}/>
        </>
    );
};

export default AllPostsPage;