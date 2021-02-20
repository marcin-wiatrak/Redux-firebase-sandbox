import React from 'react';

const TasksList = (props) => (
    <ul>
        {props.store.map((item) => (
            <li key={Math.random()}>{item}</li>
        ))}
    </ul>
);

export default TasksList;
