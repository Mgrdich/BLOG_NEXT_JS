import {FC} from 'react';
import Image from "next/image";
import styled from "styled-components";
import Lib_Posts from "../../../util/Lib_Posts";

const StyledHeader = styled.header`
  padding-bottom: var(--size-8);
  border-bottom: 8px solid var(--color-primary-100);
  margin: var(--size-4) 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: var(--size-8) 0;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledH1 = styled.h1`
  font-size: var(--size-8);
  color: var(--color-primary-500);
  margin: 0;
  line-height: initial;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--size-16);
    text-align: left;
  }
`;

interface IPostHeader {
    title: string,
    image: string,
    slug: string
}

const PostHeader: FC<IPostHeader> = ({title, image, slug}) => {

    const imagePath: string = Lib_Posts.getPostsImagesLoc(slug, image);

    return (
        <StyledHeader>
            <StyledH1>{title}</StyledH1>
            <Image src={imagePath}
                   height={150}
                   width={200}
                   alt={title}
            />
        </StyledHeader>
    );
};

export default PostHeader;