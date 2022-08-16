import {useRouter} from 'next/router';

import homePage from './index.module.scss';

import HeaderNav from './HeaderNav';

function Header(){

    const router = useRouter();
    const homePageHandler = () => router.push('/');

    return (
        <header className={homePage.header}>
            <h1 onClick={homePageHandler}>Trip Advisor Demo</h1>
            <HeaderNav/>
        </header>
    );
};

export default Header;