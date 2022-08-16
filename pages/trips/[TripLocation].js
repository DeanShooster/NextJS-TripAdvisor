import { Fragment, useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

import {BsStarFill} from 'react-icons/bs';

import locations from '../data/locations';
import TripPage from './TripPage';
import CustomizeTrip from './CustomizeTrip';

function TripLocation(){

    const router = useRouter();
    const [location,setLocation] = useState(null);
    const [stars,setStars] = useState(null);

    useEffect(()=> {
        if(router.query.TripLocation !== 'customize')
            for(let i = 0; i < locations.locationImages.length; i++)
                if( locations.locationImages[i].location === router.query.TripLocation ){
                    setLocation(locations.locationImages[i]);
                    let ranking = [];
                    for(let j = 0; j < locations.locationImages[i].rank; j++) ranking.push(<BsStarFill />); setStars(ranking);
                    break;
                }
    },[router.query.TripLocation]);

    return (
        <Fragment>
            <Head> <title>Trip Advisor {location?.location}</title> </Head>
            { location ? <TripPage location={location} stars={stars}/> : <CustomizeTrip /> }
        </Fragment>
    );
};

export default TripLocation;