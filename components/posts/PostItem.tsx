import {FC} from "react";
import styled from "styled-components";
import {postType} from "../../types/components/posts";

const StyledPosts = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--color-grey-800);
  text-align: center;
  a {
    color: var(--color-grey-100);
  }
`;

const StyledImage = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const StyledContent = styled.div`
  padding: var(--size-4);
`;

const StyledH3 = styled.h3`
  margin: var(--size-2) 0;
  font-size: var(--size-6);
`;

const StyledTime = styled.span`
  font-style: italic;
  color: var(--color-grey-300);
`;

const StyledP = styled.p`
  line-height: var(--size-6);
`;

interface IPostItem {
    post: postType
}

const PostItem: FC<IPostItem> = () => {
    return (
        <>

        </>
    );
};

export default PostItem;