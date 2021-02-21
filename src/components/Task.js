import { deleteTodo } from '../store/actions/deleteTodo';
import { useDispatch } from 'react-redux';

const Task = ({ title, id }) => {
    const dispatch = useDispatch();
    console.log('dupa2');
    return <div onClick={() => dispatch(deleteTodo(id))}>{title}</div>;
};

export default Task;
