import {FC} from 'react';
import Logo from "./Logo";
import Link from "next/link";
import styled from "styled-components";


const MainNavigation: FC = () => {
    return (
        <header>
            <Link href="/">
                <a><Logo/></a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;