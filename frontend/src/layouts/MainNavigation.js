import { NavLink } from "react-router-dom"
import styles from './MainNavigation.module.css';

const MainNavigation = () =>{
    const activeClass = ({isActive}) => isActive ? styles.active : undefined ;
    return <header className={styles.header}>
        <nav>
            <ul className={styles.list}>
                <li> <NavLink className={activeClass} to='/' >Home</NavLink> </li>
                <li> <NavLink className={activeClass} to='/events' >Events</NavLink> </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;