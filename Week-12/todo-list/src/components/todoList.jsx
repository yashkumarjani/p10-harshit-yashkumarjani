import React, { useEffect, useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    const [value, setValue] = useState("");
    const [tasksRemaining, setTasksRemaining] = useState(0);

    //Add Item
    const addTask = (title) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    //Submit Item
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return alert("Please enter the value!");
        }
        addTask(value);
        setValue("");
    }

    //Complete Item
    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    //Remove Item
    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    return (
        <div className="todoBox">
            <marquee>
                <span className="header"><i>Pending tasks </i> (<b style={{ color: 'orange' }}>{tasksRemaining}</b>)</span>
            </marquee>
            <h1>TODO - ITEMS</h1>

            {/* Lists */}
            <div className="tasks">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="task-items"
                        style={{ color: task.completed ? "#0000008a" : "" }}
                    >
                        {task.title}
                        <button style={{ background: "#a11d1d" }} onClick={() => removeTask(index)}>x</button>

                        <button className='green' style={{ background: task.completed == false ? "rgb(69 81 72)" : "rgb(26 103 66)" }} onClick={() => completeTask(index)}>
                            {
                                task.completed ? 'Completed' : 'Is Complete? '
                            }</button>
                    </div>
                ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='formUi'>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
                <button className='blue' type='submit'> Add Item </button>
            </form>
        </div>
    );
}

export default Todo;
