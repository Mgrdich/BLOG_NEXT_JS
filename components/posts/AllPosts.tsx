import {FC} from 'react';
import styled from "styled-components";
import PostsGrid from "./PostsGrid";
import {postsType} from "../../types/posts";

const StyledPosts = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: var(--size-8) auto;
`;

const Header1 = styled.h1`
  font-size: var(--size-8);
  color: var(--color-grey-800);
  text-align: center;
  @media (min-width: 768px) {
    font-size: var(--size-16);
  }
`;

interface IAllPosts {
    posts: postsType
}

const AllPosts: FC<IAllPosts> = ({posts}) => {
    return (
        <StyledPosts>
            <Header1>All Posts</Header1>
            <PostsGrid posts={posts}/>
        </StyledPosts>
    );
};

export default AllPosts;