import { Fragment } from 'react';
import Link from 'next/link';

import trips from './index.module.scss';
import {BiDollar} from 'react-icons/bi';

const Trip = ( {trip,index} ) => {
    return (
        <div className={trips.tripContainer}>
        {
            (index % 2 === 0) ? <Fragment>
                    <div className={trips.imageContainer}>
                        <img alt={trip.location} src={trip.image} style={{transform: 'skew(10deg)'}}/>
                    </div>
                    <div className={trips.infoContainer}>
                        <h1>{trip.location}</h1>
                        <p> {trip.text}</p>
                        <Link href={`/trips/${trip.location}`}>Package Info</Link>
                        <p className={trips.price} style={{right: 0}}><BiDollar/>{trip.price}</p>
                    </div>
                </Fragment>
            : <Fragment>
                <div className={trips.infoContainer}>
                    <h1>{trip.location}</h1>
                    <p> {trip.text}</p>
                    <Link href={`/trips/${trip.location}`}>Package Info</Link>
                    <p className={trips.price}><BiDollar/>{trip.price}</p>
                </div>
                <div className={trips.imageContainer}>
                    <img alt={trip.location} src={trip.image} style={{transform: 'skew(-10deg)'}}/>
                </div>
            </Fragment>
        }
        </div>
    );
};

export default Trip;