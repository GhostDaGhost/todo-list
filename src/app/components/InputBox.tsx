"use client";

// INPUT BOX
export default (props: InputBoxProps) => {
    const handleInputChange = (event: any) => {
        console.log('InputBox - Input change event:', event.target.value);
        props.onInputChange(event.target.value);
    }

    // RETURN ELEMENT
    return (
        <div className="flex justify-center mt-5">
            <input
                id="newtaskname"
                name="newtaskname"
                type="text"
                className="p-1 px-3 rounded bg-black text-white"
                placeholder="Enter task name..."
                value={props.newTaskName}
                onChange={e => handleInputChange(e)}
            />

            <button
                type="button"
                className="bg-green-400 px-3 rounded transition hover:bg-green-300"
                onClick={props.onCreateButtonClick}
            >
                Create
            </button>
        </div>
    )
}
