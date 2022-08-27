import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <FontAwesomeIcon icon={faListCheck} className={classes.icon} />
                Task Manager
            </h1>
        </header>
    );
}

export default Header;
