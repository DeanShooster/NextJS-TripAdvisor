
import footer from './index.module.scss';
import {FaTripadvisor} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={footer.footer}>
            <li>Help</li>
            <li>Company</li>
            <li>Investors</li>
            <li>Trip Security</li>
            <li><span><FaTripadvisor /></span></li>
        </footer>
    );
};

export default Footer;