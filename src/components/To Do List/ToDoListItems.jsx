import axios from 'axios';

function ToDoListItem({item, fetchToDoList}) {
    const finishedTask = (event) => {
        axios.put(`/todo/${item.id}`).then((response) => {
            console.log(response);
            fetchToDoList();
        })
        .catch((error) => {
            console.log(`Error with finished task ${error}`);
        })
    }

    const deleteTask = (event) => {
        axios.delete(`/todo/${item.id}`).then((response) => {
            fetchToDoList();
        })
        .catch((error) => {
            console.log(`Error deleting task ${error}`);
        })
    }

    return (
        <>
        <li>
            {item.task}
            <br />
            <button onClick={(event) => finishedTask()}>Complete</button>
            <br />
            <button onClick={(event) => deleteTask()}>Delete</button>
        </li>
        </>
    )
}

export default ToDoListItem;