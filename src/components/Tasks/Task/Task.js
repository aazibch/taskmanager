import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Task.module.css';

function Task(props) {
    const checkboxClasses = [classes.checkbox];
    const descInputClasses = [classes.descInput];

    if (props.completed) {
        checkboxClasses.push(classes.checkbox_checked);
        descInputClasses.push(classes.descInput_lineThrough);
    }

    function handleClickOnCheckbox(e) {
        if (props.completed) {
            props.taskUncheckHandler(e, props.id);
        } else {
            props.taskCheckHandler(e, props.id);
        }
    }

    return (
        <div className={classes.task}>
            {props.new ? (
                <FontAwesomeIcon className={classes.plusIcon} icon={faPlus} />
            ) : (
                <div
                    className={checkboxClasses.join(' ')}
                    onClick={handleClickOnCheckbox}
                />
            )}

            <TextareaAutosize
                className={descInputClasses.join(' ')}
                placeholder={props.completed ? undefined : 'Task description'}
                onChange={(e) =>
                    props.taskChangeHandler(
                        e,
                        props.completed ? 'completed' : 'incomplete',
                        props.id
                    )
                }
                value={props.description}
                onKeyDown={props.taskKeyDownHandler}
            />

            {!props.new && (
                <button
                    className={classes.deleteButton}
                    onClick={(e) =>
                        props.taskDeleteHandler(
                            e,
                            props.completed ? 'completed' : 'incomplete',
                            props.id
                        )
                    }
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}
        </div>
    );
}

export default Task;
