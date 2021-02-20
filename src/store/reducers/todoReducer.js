export const todoReducer = (state = ['obiad'], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(state);
            return [...state, action.payload];
        default:
            return state;
    }
};
