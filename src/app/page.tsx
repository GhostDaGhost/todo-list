"use client";

// IMPORTS
import { useState } from "react";

import Header from "./components/Header";
import InputBox from "./components/InputBox";
import ListOfTasks from "./components/ListOfTasks";

// INDEX
export default () => {
    const [tasks, setTasks] = useState<string[]>(['Do the laundry', 'Tidy up the desks', 'Feed dogs and cats', 'Watch TV and take the day off', 'Let\'s see what happens when this task is super long lmao']);
    const [newTaskName, setNewTaskName] = useState('');

    // ON CREATE BUTTON CLICK
    const onCreateButtonClick = (newTaskName: string) => {
        console.log('onCreateButtonClick triggered.');
        console.log(newTaskName);
    }

    const deleteTask = (targetTask: string) => {
        console.log('deleteTask triggered.', targetTask);
        setTasks(tasks.filter(task => task !== targetTask));
    }

    console.log('Parent component - newTaskName:', newTaskName);

    // RETURN ELEMENT
    return (
        <div className="flex justify-center">
            <div className="top-9 relative px-8 py-5 rounded bg-zinc-900">
                <Header />
                <InputBox
                    newTaskName={newTaskName}
                    onInputChange={setNewTaskName}
                    onCreateButtonClick={() => onCreateButtonClick(newTaskName)}
                />

                <ListOfTasks tasks={tasks} deleteTask={deleteTask} />
            </div>
        </div>
    )
}
