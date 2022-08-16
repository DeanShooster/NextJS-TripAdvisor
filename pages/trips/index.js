import { Fragment } from 'react';

import Header from '../Header';
import AllTrips from './AllTrips';
import Footer from '../Footer';

function Trips(){
    return (
        <Fragment>
            <Header />
            <AllTrips />
            <Footer />
        </Fragment>
    );
};

export default Trips;