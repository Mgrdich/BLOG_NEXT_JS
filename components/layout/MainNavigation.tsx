import {FC} from 'react';
import Logo from "./Logo";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 6rem;
  background-color: var(--color-grey-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  a {
    color: var(--color-grey-100);
    font-size: var(--size-4);

    &:hover, &:active, &.active {
      color: var(--color-grey-200);
    }

    @media (min-width: 768px) {
      font-size: var(--size-5);
    }
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 0 var(--size-4);
`;

const MainNavigation: FC = () => {
    return (
        <StyledHeader>
            <Logo/>
            <nav>
                <StyledUl>
                    <StyledLi>
                        <Link href="/posts">
                            Posts
                        </Link>
                    </StyledLi>
                    <StyledLi>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </StyledLi>
                </StyledUl>
            </nav>
        </StyledHeader>
    );
};

export default MainNavigation;