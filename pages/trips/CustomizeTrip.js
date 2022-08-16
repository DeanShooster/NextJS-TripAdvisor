import { useRouter } from 'next/router';

import customizeTrip from './new-trip.module.scss';
import {ImArrowLeft} from 'react-icons/im';

import location from '../data/locations';

const CustomizeTrip = () => {

    const router = useRouter();
    const returnToTripsHandler = () => router.push('/trips');

    const onTripSubmitHandler = (event) =>{
        event.preventDefault();
        const trip = {
            location: event.target[0].value, 
            price: event.target[1].value,
            text: event.target[2].value,
            image: 'https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=1380&t=st=1660652828~exp=1660653428~hmac=8a17a69594a66ef7c517686bd076848671fa3703052fca8cc7ff5044a57d960c'
        }
        location.tripLocations.push( trip );
        alert('Location added successfully');
    }

    return (
        <section className={customizeTrip.customizeTripContainer}>
            <span className={customizeTrip.previousPage} onClick={returnToTripsHandler}><ImArrowLeft/></span>
            <h1>Customize Trip</h1>
            <div className={customizeTrip.newTripFormContainer}>
                <h2>Customized Trip Form</h2>
                <form onSubmit={onTripSubmitHandler}>
                    <div>
                        <label>Location</label>
                        <input />
                    </div>
                    <div>
                        <label>Avg Price</label>
                        <input type='number'/>
                    </div>
                    <label>General Info</label>
                    <textarea />
                    <button>Add Trip</button>
                </form>
            </div>
        </section>  
    );
};

export default CustomizeTrip;