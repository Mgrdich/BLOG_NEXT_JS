import {FC} from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import {postsType} from "../../types/components/posts";

const StyledGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;
`;


interface IPostsGrid {
    posts: postsType
}

const PostsGrid: FC<IPostsGrid> = ({posts}) => {
    return (
        <StyledGrid>
            {
                posts.map(post => <PostItem key={post.id}
                                            post={post}
                    />
                )
            }
        </StyledGrid>
    );
};

export default PostsGrid;