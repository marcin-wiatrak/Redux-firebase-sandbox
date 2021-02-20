import React from 'react';
import { store } from '../../store/store';

const TasksList = (props) => {
    console.log(props);
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
