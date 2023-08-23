import axios from 'axios';
import './ToDoList.css';

function ToDoListItem({item, fetchToDoList}) {
    const finishedTask = () => {
        const updatedTask = {
            complete: true,
        };

        axios.put(`/todo/${item.id}` , updatedTask).then((response) => {
            console.log(response);
            fetchToDoList();
        })
        .catch((error) => {
            console.log(`Error with finished task ${error}`);
        })
    }

    const deleteTask = () => {
        axios.delete(`/todo/${item.id}`).then((response) => {
            fetchToDoList();
        })
        .catch((error) => {
            console.log(`Error deleting task ${error}`);
        })
    }

    const crossedOut = () => {
        if(item.complete === true) {
            return 'line-through';
        }else {
            return 'none';
        }
    }

    return (
        <>
        <div key={item.id} className="item-container">
        <li style={{ textDecoration: crossedOut() }}>
            <p>{item.task}</p>
            <br />
            <button onClick={() => finishedTask(item.id)}>Complete</button>
            <br />
            <button onClick={() => deleteTask(item.id)}>Delete</button>
        </li>
        </div>
        </>
    )
}

export default ToDoListItem;