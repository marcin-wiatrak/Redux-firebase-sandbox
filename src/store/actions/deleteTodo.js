export const deleteTodo = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection('todos')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: 'DELETE_TODO', id });
            })
            .catch((err) => {
                // dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            });
    };
};
