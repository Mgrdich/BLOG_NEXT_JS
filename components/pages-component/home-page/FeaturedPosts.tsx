import {FC} from 'react';
import styled from "styled-components";
import PostsGrid from "../../posts/PostsGrid";
import {postsType} from "../../../types/components/posts";

const Latest = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: var(--size-8) auto
`;

const Header2 = styled.h2`
  font-size: var(--size-8);
  color: var(--color-grey-800);
  text-align: center;
  @media (min-width: 768px) {
    font-size: var(--size-16);
  }
`

interface IFeaturedPosts {
    posts: postsType
}

const FeaturedPosts: FC<IFeaturedPosts> = ({posts}) => {
    return (
        <Latest>
            <Header2> Featured Posts </Header2>
            <PostsGrid posts={posts}/>
        </Latest>
    );
};

export default FeaturedPosts;