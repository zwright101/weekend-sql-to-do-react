import axios from 'axios';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';


function ToDoListItem({ item, fetchToDoList }) {
  const finishedTask = () => {
    const updatedTask = {
      complete: true,
    };

    axios.put(`/todo/${item.id}`, updatedTask)
      .then((response) => {
        console.log(response);
        fetchToDoList();
      })
      .catch((error) => {
        console.log(`Error with finished task ${error}`);
      });
  };

  const deleteTask = () => {
    axios.delete(`/todo/${item.id}`)
      .then((response) => {
        fetchToDoList();
      })
      .catch((error) => {
        console.log(`Error deleting task ${error}`);
      });
  };

  const crossedOut = () => {
    if (item.complete === true) {
      return 'line-through';
    } else {
      return 'none';
    }
  };

  return (
    <div key={item.id} className="item-container">
      <li style={{ textDecoration: crossedOut(), display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>{item.task}</p>
        <br />
        <ButtonGroup variant="contained" aria-label="split button">
          <Button onClick={finishedTask}> <CheckIcon /> </Button>
          <Button aria-label="delete" onClick={deleteTask}> <DeleteIcon /> </Button>
        </ButtonGroup>
      </li>
    </div>
  );
}

export default ToDoListItem;
