interface InputBoxProps {
    newTaskName: string;
    onInputChange: any;
    onCreateButtonClick: any;
}

interface ListOfTasksProps {
    tasks: string[];
    deleteTask: any;
}

interface ListTaskProps {
    task: string;
    deleteTask: any;
}
