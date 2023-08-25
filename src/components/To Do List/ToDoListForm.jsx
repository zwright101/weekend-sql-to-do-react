import axios from 'axios';

// Material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Add New Task" variant="outlined" value={toDoListItems} onChange={(event) => setToDoListItems(event.target.value)}/>
            </Box>
                {/* Task: <input type="text" value={toDoListItems} onChange={(event) => setToDoListItems(event.target.value)} /> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ToDoListForm;