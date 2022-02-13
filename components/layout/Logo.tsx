import {FC} from 'react';
import styled from "styled-components";
import Link from "next/link";

const StyledText = styled.div`
  text-transform: uppercase;
  font-size: var(--size-5);
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  color: var(--color-grey-50);
  @media (min-width: 768px) {
    font-size: var(--size-8);
  }
`;

const Logo: FC = () => {
    return (
        <Link href="/">
            <StyledText>
                MGO Website
            </StyledText>
        </Link>
    );
};

export default Logo;