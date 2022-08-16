import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';

import trips from './index.module.scss';

import Trip from './trip';
import locations from '../data/locations';

function AllTrips(){

    const [allTrips,setAllTrips] = useState(null);
    useEffect( ()=>{ setAllTrips(locations.tripLocations); },[]);

    return (
        <Fragment>
            <Head> <title>Trip Advisor All Trips</title> </Head>
            <section className={trips.allTrips}>
                { allTrips?.map( (trip,index)=>{ return ( <Trip key={trip.location + index} trip={trip} index={index}/>); })}
            </section>
        </Fragment>
    );
};

export default AllTrips;