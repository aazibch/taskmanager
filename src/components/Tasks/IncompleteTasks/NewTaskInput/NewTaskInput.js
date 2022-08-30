import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './NewTaskInput.module.css';

function NewTaskInput(props) {
    return (
        <div className={classes.input}>
            <FontAwesomeIcon icon={faPlus} />
            <TextareaAutosize
                placeholder='Task description'
                value={props.desc}
                onChange={props.onChangeHandler}
            />
        </div>
    );
}

export default NewTaskInput;
