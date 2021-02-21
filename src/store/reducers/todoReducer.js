export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state;

        case 'DELETE_TODO':
            return state;
        default:
            return state;
    }
};
