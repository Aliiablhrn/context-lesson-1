import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { todoContext } from '../../contexts/todoContext';

const Add = () => {
    const { createTodo } = useContext(todoContext)
    const [todo, setTodo] = useState('')
    function handleSave(){
        let newTodo = {
            todo,
        }
        createTodo(newTodo);
        console.log(newTodo);
    }
    return (
        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TextField 
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
                label="Outlined" 
                variant="outlined" 
            />
            <Button onClick={() => handleSave()} variant="contained">Add</Button>
        </Box>
    );
};

export default Add;