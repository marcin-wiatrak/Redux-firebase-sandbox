import React from 'react';
import { store } from '../../store/store';
import { useSelector } from 'react-redux';
const TasksList = (props) => {
    console.log(props);
    const todos = useSelector((state) => state);
    return (
        <ul>
            {props.store.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    );
};

store.subscribe(TasksList);

export default TasksList;
