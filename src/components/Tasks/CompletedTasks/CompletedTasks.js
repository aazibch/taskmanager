import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Task from '../Task/Task';

import classes from './CompletedTasks.module.css';

function CompletedTasks(props) {
    return (
        <>
            <div
                className={classes.toggle}
                onClick={props.completedTasksToggleHandler}
            >
                {props.showCompletedTasks ? (
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={classes.arrowIcon}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faCaretRight}
                        className={classes.arrowIcon}
                    />
                )}
                Completed tasks
            </div>
            {props.showCompletedTasks && (
                <div>
                    {props.tasks.map((task, index) => (
                        <Task
                            key={index}
                            id={index}
                            description={task.description}
                            new={task.new}
                            completed={true}
                            taskChangeHandler={props.taskChangeHandler}
                            taskDeleteHandler={props.taskDeleteHandler}
                            taskUncheckHandler={props.taskUncheckHandler}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default CompletedTasks;
