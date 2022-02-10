import {FC, ReactNode} from 'react';
import MainNavigation from "./MainNavigation";

interface ILayout {
    children: ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <MainNavigation/>
            <main>{children}</main>
        </>
    );
};

export default Layout;