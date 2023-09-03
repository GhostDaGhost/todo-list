"use client";

// LIST TASK
export default (props: ListTaskProps) => {
    const { task, deleteTask } = props;
    
    // RETURN ELEMENT
    return (
        <div className="w-96 mb-3 flex items-center justify-between p-2 border rounded border-gray-300 bg-zinc-900">
            <span className="text-white">{task}</span>
            <button
                className="px-2 text-red-500 rounded border border-red-500 transition hover:text-red-300 hover:border-red-300"
                onClick={() => deleteTask(task)}
            >
                Remove
            </button>
        </div>
    )
}
