
export function fetchTodos() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_TODOS' });
        return fetch('/api/todos.json').then(response => {
            return response.json()
        }).then(todos => dispatch({ type: 'FETCH_TODOS', payload: todos }));
    };
}