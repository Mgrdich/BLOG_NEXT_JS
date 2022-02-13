import {postDetails, postsType, postType} from "../types/components/posts";

export const POSTS: postsType = [
    {
        id: '1',
        header: 'Header1',
        time: "10-10-2011",
        slug: "slug1",
        image: "image1.png",
        paragraph: "some long text is working here"
    },
    {
        id: '2',
        header: 'Header2',
        time: "10-10-2013",
        slug: "slug2",
        image: "image2.png",
        paragraph: "some long text is working here"
    }
];

export const POSTS_DETAILED: postDetails = POSTS.map(function (item: postType) {
    return {
        ...item,
        paragraphDetailed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
})