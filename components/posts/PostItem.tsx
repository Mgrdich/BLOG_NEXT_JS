import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {postType} from "../../types/components/posts";

const StyledPost = styled.li`
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

const StyledTime = styled.time`
  font-style: italic;
  color: var(--color-grey-300);
`;

const StyledP = styled.p`
  line-height: var(--size-6);
`;

interface IPostItem {
    post: postType
}

const PostItem: FC<IPostItem> = ({post}) => {
    return (
        <StyledPost>
            <Link href="/">
                <a>
                    <StyledImage>
                        <Image src={post.src} alt=""/>
                    </StyledImage>
                    <StyledContent>
                        <StyledH3>Title</StyledH3>
                        <StyledTime>10.11.2021</StyledTime>
                        <StyledP>Some text here</StyledP>
                    </StyledContent>
                </a>
            </Link>
        </StyledPost>
    );
};

export default PostItem;