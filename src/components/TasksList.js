import React from 'react';
import { connect, useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Task from './Task';

const TasksList = () => {
    useFirestoreConnect([{ collection: 'todos' }]);
    const todos = useSelector((state) => state.firestore.ordered.todos);

    return (
        <>{todos && todos.map((todo) => <Task key={todo.id} {...todo} />)}</>
    );
};

export default compose(
    withFirestore,
    connect((state) => ({
        todos: state.firestore.ordered.todos,
    }))
)(TasksList);
