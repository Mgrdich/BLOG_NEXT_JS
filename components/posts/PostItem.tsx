import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {postType} from "../../types/components/posts";
import Lib from "../../util/Lib";

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
    const formattedDate: string = new Date(post.time)
        .toLocaleDateString('en-US', {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    const imagePath:string = Lib.getPostsImagesLoc(post.slug, post.image);

    const linkPath :string = `/posts/${post.slug}`;

    return (
        <StyledPost>
            <Link href={linkPath}>
                <a>
                    <StyledImage>
                        <Image src={imagePath}
                               alt={post.header}
                               width={300} height={200}
                               layout="responsive"
                        />
                    </StyledImage>
                    <StyledContent>
                        <StyledH3>{post.header}</StyledH3>
                        <StyledTime>{formattedDate}</StyledTime>
                        <StyledP>{post.paragraph}</StyledP>
                    </StyledContent>
                </a>
            </Link>
        </StyledPost>
    );
};

export default PostItem;