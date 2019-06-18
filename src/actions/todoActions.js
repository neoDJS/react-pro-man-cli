import { paramsConnected } from './sessionActions'

export function fetchTodos() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_TODOS' });
        return fetch('/api/todos.json').then(response => {
            return response.json()
        }).then(todos => dispatch({ type: 'FETCH_TODOS', payload: todos }));
    };
}

export function addAffectation(data) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch('/api/projects.json').then(response => {//http://localhost:3001
            return response.json()
        }).then(projects => dispatch({ type: 'FETCH_PROJECTS', payload: projects }));
    };
}