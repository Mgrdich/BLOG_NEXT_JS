import {FC} from 'react';
import Logo from "./Logo";
import Link from "next/link";

const MainNavigation: FC = () => {
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <Link href=""/> 
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;