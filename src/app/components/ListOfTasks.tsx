"use client";

// IMPORTS
import ListTask from "./ListTask"

// LIST OF TASKS
export default (props: ListOfTasksProps) => {
    return (
        <div className="mt-8 px-3 pt-3 pb-1 bg-black rounded">
            {props.tasks.map((task: string, index: number) => (
                <ListTask key={index} task={task} deleteTask={props.deleteTask} />
            ))}
        </div>
    )
}
