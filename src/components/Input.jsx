import React from 'react';
 
const Input = ({task, setTask, list}) => {


    const onChangeHandler = event => {
        event.preventDefault();
        // console.log("hello")
        // console.log(document.getElementById("newtaskid").value)
        setTask({
            ...task,
            text: event.target.value,
            // taskList.push(document.getElementById("newtaskid").value),
        //     console.log(taskList),
        // })
        })
        // taskList.push(document.getElementById("newtaskid").value);
        // console.log(task.text);
        // console.log(task.completed);
    }

    const addTask = event => {
        event.preventDefault();
        console.log("add task")
        console.log(task)
        list.push(task)
        console.log(list)
        // setList(
        //     [...list,task]
        // )
        setTask(
            {
                text: '',
                completed: false,
            }
        )
    }

    return(
        <form>
            <input
                id="newtaskid"
                name = "newtask"
                placeholder = "add something to do you lazy fuck"
                className = "mb-3 inputbox"
                onChange={onChangeHandler}
                value = {task.text}
            />
            <button onClick={addTask}>submit</button>
        </form>
    )
}
export default Input;

