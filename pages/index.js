import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';
import Screen from './Screen';

function MainPage(){
    return (
        <div>
            <Head> <title>Trip Advisor</title> </Head>
            <Header />
            <Screen />
            <Footer />
        </div>
    );
}



export default MainPage;