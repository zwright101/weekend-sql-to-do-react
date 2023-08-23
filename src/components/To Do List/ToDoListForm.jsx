import axios from 'axios';

function ToDoListForm ({toDoListItems, setToDoListItems, fetchToDoList}) {
    const submitForm = (event) => {
        event.preventDefault();
        axios.post('/todo' , {
            task: toDoListItems
        })
        .then((response) => {
            setToDoListItems('');
            fetchToDoList();
        })
        .catch((error) => {
            console.log(`Error POSTING new task ${error}`);
        })
    }

    return (
        <div className ="toDoForm">
            <form onSubmit={submitForm}>
                Task: <input type="text" value={toDoListItems} onChange={(event) => setToDoListItems(event.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ToDoListForm;