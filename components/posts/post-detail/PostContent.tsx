import {FC} from 'react';
import styled from "styled-components";


const StyledContent = styled.div`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-grey-100);
  border-radius: 6px;
  padding: var(--size-4);
  @media (min-width: 768px) {
    padding: var(--size-8);
  }
`;

const StyledParagraph = styled.p`
  color: var(--color-grey-800);
`;

const StyledImageCont = styled.div`
  margin: var(--size-4) auto;
  width: 100%;
  max-width: 600px;
`;


const PostContent: FC = () => {
    return (
        <>

        </>
    );
};

export default PostContent;