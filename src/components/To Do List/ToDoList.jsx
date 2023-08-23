import {useState, useEffect} from 'react';
import axios from 'axios';
import ToDoListItems from './ToDoListItems';
import ToDoListForm from './ToDoListForm';

function ToDoList() {
    const [toDoListItems, setToDoListItems] = useState('');
    const [tasks, setTasks] = useState([]);

    const fetchToDoList = () => {
        axios.get('/todo').then((response) => {
            setTasks(response.data);
        }).catch((error) => {
            console.log(`Error GETTING tasks ${error}`);
        })
    }

    useEffect(() => {
        fetchToDoList();
    } , []);


return (
    <div className="toDoListForm">
        <h2>Add a new Task:</h2>
        <ToDoListForm
            toDoListItems={toDoListItems}
            setToDoListItems={setToDoListItems}
            fetchToDoList={fetchToDoList} />

        <h2>To do List:</h2>
        <ul>
            {
            tasks.map((item) => (
                <div id="toDoListItem">
                <ToDoListItems
                    key={item.id}
                    item={item}
                    fetchToDoList={fetchToDoList} />
                    </div>
            ))
            }
        </ul>
    </div>
)

}

export default ToDoList;