import Task from '../Task/Task';

import classes from './IncompleteTasks.module.css';

function IncompleteTasks(props) {
    return (
        <div className={classes.incompleteTasks}>
            {props.tasks &&
                props.tasks.map((task, index) => (
                    <Task
                        key={index}
                        id={index}
                        description={task.description}
                        new={task.new}
                        completed={false}
                        taskChangeHandler={props.taskChangeHandler}
                        taskKeyDownHandler={props.taskKeyDownHandler}
                        taskDeleteHandler={props.taskDeleteHandler}
                        taskCheckHandler={props.taskCheckHandler}
                    />
                ))}
        </div>
    );
}

export default IncompleteTasks;
