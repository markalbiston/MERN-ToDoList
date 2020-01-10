import React, {useState} from 'react';
import Input from './Input';

const List =  () => {
    // let taskList = [];
    const [task, setTask] = useState ({
        text: '',
        completed: false,
    })
    const [list, setList] = useState ([])

    // console.log(taskList);

    const onCheckBoxHandler = event => {
        event.preventDefault();
        setTask({
            ...task,
            [event.target.completed]: true,
        })
        console.log(list)
        if(event.target.className === "listitem"){
            event.target.className = "listitemcompleted"
        }
        else{
            event.target.className = "listitem"
        }
    }
    
    const onDelete = (event,index) => {
        list.splice(index,1)
        setList([...list])
        console.log(list)
        
    }

    return(
        <div>
            <h1>My To Do List</h1>
            <Input task={task} setTask={setTask} list={list}/>
            <div>
                {list.map((task, index) => 
                    <div className="itemset" key={index}>
                        <p className="listitem" onClick={onCheckBoxHandler}>{task.text}</p>
                        <input className="btn btn-sm btn-dark" type="button" value="delete" onClick={e=>onDelete(e,index)}/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default List;

