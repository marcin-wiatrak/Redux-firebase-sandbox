import React, { useState } from 'react';
import TasksList from '../components/TasksList';
import { store } from '../store/store';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/addTodo';

const Root = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        if (value === '') alert('Za krótkie');
        else {
            const todo = {
                title: value,
            };
            dispatch(addTodo(todo));
            setValue('');
        }
    };
    return (
        <>
            <TasksList store={store.getState()} />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Dodaj</button>
        </>
    );
};

export default Root;
