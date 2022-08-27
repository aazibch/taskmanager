import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './NewTaskForm.module.css';

function NewTaskForm() {
    return (
        <form className={classes.form}>
            <input type='text' />
            <button>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </form>
    );
}

export default NewTaskForm;
