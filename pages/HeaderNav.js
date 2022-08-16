import Link from 'next/link';

const HeaderNav = () => {
    return (
        <nav>
            <Link href='/trips'>All Trips</Link>
            <Link href='/trips/customize' >Customize Trip</Link>
        </nav>
    );
};

export default HeaderNav;