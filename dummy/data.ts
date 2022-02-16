import {postDetails, postsType, postType} from "../types/posts";

export const POSTS: postsType = [
    {
        id: '1',
        header: 'Header1',
        time: "10-10-2011",
        slug: "post1",
        image: "content_image.png",
        paragraph: "some long text is working here"
    },
    {
        id: '2',
        header: 'Header2',
        time: "10-10-2013",
        slug: "post2",
        image: "image1.png",
        paragraph: "some long text is working here"
    }
];

export const POSTS_DETAILED: postDetails = POSTS.map(function (item: postType) {
    return {
        ...item,
        paragraphDetailed: '# This is a markdown Header'
    };
})