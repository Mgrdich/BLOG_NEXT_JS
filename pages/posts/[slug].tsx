import {NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent";
import {POSTS_DETAILED} from "../../dummy/data";
import {postDetail} from "../../types/components/posts";

const DummyPost: postDetail = POSTS_DETAILED[0];


const PostDetailPage: NextPage = () => {
    return (
        <>
            <PostContent content={DummyPost.paragraphDetailed}
                         title={DummyPost.header}
                         image={DummyPost.image}
            />
        </>
    );
};

export default PostDetailPage;