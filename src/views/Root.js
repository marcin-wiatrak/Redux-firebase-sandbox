import React from 'react';
import TasksList from '../components/TasksList/TasksList';
import { store } from '../store/store';
import { useDispatch } from 'react-redux';

const Root = () => {
    const dispatch = useDispatch();

    return (
        <>
            <TasksList store={store.getState()} />
            <button
                onClick={() =>
                    dispatch({ type: 'ADD_TODO', payload: 'kolacja' })
                }
            >
                Kliknij mnie
            </button>
        </>
    );
};

export default Root;
