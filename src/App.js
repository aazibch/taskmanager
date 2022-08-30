import { useState } from 'react';

import Layout from './components/Layout/Layout';
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks';
import IncompleteTasks from './components/Tasks/IncompleteTasks/IncompleteTasks';

function App() {
    const [incompleteTasks, setIncompleteTasks] = useState([
        { description: '', new: true, timeStamp: null }
    ]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [showCompletedTasks, setShowCompletedTasks] = useState(true);

    function taskChangeHandler(e, type, index) {
        let updatedTasks;

        if (type === 'incomplete') {
            updatedTasks = [...incompleteTasks];

            if (!updatedTasks[index].timeStamp) {
                updatedTasks[index].timeStamp = Date.now();
                updatedTasks[index].new = false;
            }

            updatedTasks[index] = {
                ...updatedTasks[index],
                description: e.target.value
            };

            if (incompleteTasks.length - 1 === index) {
                updatedTasks.push({
                    description: '',
                    new: true,
                    timeStamp: null
                });
            }

            setIncompleteTasks(updatedTasks);
        }

        if (type === 'completed') {
            updatedTasks = [...completedTasks];

            updatedTasks[index] = {
                ...updatedTasks[index],
                description: e.target.value
            };

            setCompletedTasks(updatedTasks);
        }
    }

    function taskKeyDownHandler(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
        }
    }

    function taskDeleteHandler(e, type, index) {
        let updatedTasks;

        if (type === 'incomplete') {
            updatedTasks = [...incompleteTasks];
            updatedTasks.splice(index, 1);
            setIncompleteTasks(updatedTasks);
        }

        if (type === 'completed') {
            updatedTasks = [...completedTasks];
            updatedTasks.splice(index, 1);
            setCompletedTasks(updatedTasks);
        }
    }

    function taskCheckHandler(e, index) {
        const updatedIncompleteTasks = [...incompleteTasks];
        const updatedCompletedTasks = [...completedTasks];

        updatedCompletedTasks.push(updatedIncompleteTasks[index]);
        updatedCompletedTasks.sort((a, b) => a.timeStamp - b.timeStamp);
        updatedIncompleteTasks.splice(index, 1);

        setCompletedTasks(updatedCompletedTasks);
        setIncompleteTasks(updatedIncompleteTasks);
    }

    function taskUncheckHandler(e, index) {
        const updatedIncompleteTasks = [...incompleteTasks];
        const updatedCompletedTasks = [...completedTasks];

        const newTask = updatedIncompleteTasks.pop();
        updatedIncompleteTasks.push(updatedCompletedTasks[index]);
        updatedIncompleteTasks.sort((a, b) => a.timeStamp - b.timeStamp);
        updatedIncompleteTasks.push(newTask);
        updatedCompletedTasks.splice(index, 1);

        setIncompleteTasks(updatedIncompleteTasks);
        setCompletedTasks(updatedCompletedTasks);
    }

    function completedTasksToggleHandler(e) {
        setShowCompletedTasks(!showCompletedTasks);
    }

    return (
        <Layout>
            <IncompleteTasks
                tasks={incompleteTasks}
                taskChangeHandler={taskChangeHandler}
                taskKeyDownHandler={taskKeyDownHandler}
                taskDeleteHandler={taskDeleteHandler}
                taskCheckHandler={taskCheckHandler}
            />
            {completedTasks.length > 0 && (
                <CompletedTasks
                    tasks={completedTasks}
                    taskChangeHandler={taskChangeHandler}
                    taskDeleteHandler={taskDeleteHandler}
                    taskKeyDownHandler={taskKeyDownHandler}
                    taskUncheckHandler={taskUncheckHandler}
                    showCompletedTasks={showCompletedTasks}
                    completedTasksToggleHandler={completedTasksToggleHandler}
                />
            )}
        </Layout>
    );
}

export default App;
