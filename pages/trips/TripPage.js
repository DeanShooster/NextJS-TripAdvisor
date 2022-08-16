import {useRouter} from 'next/router';

import tripLocation from './trip-location.module.scss';

import {ImArrowLeft} from 'react-icons/im';

const TripPage = ( {location,stars} ) => {

    const router = useRouter();
    const returnToTripsHandler = () => router.push('/trips');

    return (
        <div className={tripLocation.tripLocationContainer}>
            <span onClick={returnToTripsHandler}><ImArrowLeft/></span>
            <h1>{router.query.TripLocation}</h1>
            <div>
                <ul>
                    { location?.info.map( (line,index)=> {return <li key={line+index}>{line}</li>} ) }
                </ul>
                <div>
                    <div className={tripLocation.scoreContainer}>People's Award<div>{stars?.map( (star,index)=>{return <div key={index}>{star}</div>;} )}</div></div>
                    <div className={tripLocation.scoreContainer}>Average Price<div style={{color: 'green'}}>{location?.price}$</div></div>
                </div>
            </div>
            <section>
                { location?.images.map( (image,index)=> {return <img key={index+image} alt={index} src={image} />} ) }
            </section>
        </div>
    );
};

export default TripPage;