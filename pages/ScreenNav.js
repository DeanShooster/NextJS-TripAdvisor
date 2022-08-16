
import screenNav from './index.module.scss';
import {MdOutlineFlightTakeoff} from 'react-icons/md';
import {FaGlobeAmericas,FaRoad} from 'react-icons/fa';
import {GiForest} from 'react-icons/gi';

const ScreenNav = () => {
    return (
        <nav className={screenNav.screenNav}>
            <div>
                <span><MdOutlineFlightTakeoff/></span>
                <p>Flight</p>
            </div>
            <div>
                <span><FaGlobeAmericas /></span>
                <p>Locations</p>
            </div>
            <div>
                <span><FaRoad /></span>
                <p>Travel</p>
            </div>
            <div>
                <span><GiForest /></span>
                <p>Nature</p>
            </div>
        </nav>
    );
};

export default ScreenNav;