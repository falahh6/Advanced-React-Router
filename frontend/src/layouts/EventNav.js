import { NavLink } from "react-router-dom";
import styles from './EventNav.module.css';
const EventNav = () => {
    // const params = useParams();
    const activeClass = ({isActive}) => isActive ? styles.active : undefined ;

    return <header className={styles.header}>
        <nav>
            <ul className={styles.list}>
                <li> <NavLink className={activeClass} to={`/events`} end>All events</NavLink> </li>
                <li> <NavLink className={activeClass} to='/events/new'>New Events</NavLink> </li>
            </ul>
        </nav>
    </header>
}

export default EventNav;