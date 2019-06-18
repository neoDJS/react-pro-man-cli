import { paramsConnected } from './sessionActions'

export function fetchProjects() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch('/api/v1/projects').then(response => {//http://localhost:3001
            return response.json()
        }).then(projects => dispatch({ type: 'FETCH_PROJECTS', payload: projects }));
    };
}

export function addProject(data) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch('/api/v1/projects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',                
                'Authorization': 'Token ' + paramsConnected().token
            },
            body: JSON.stringify(data)
        }).then(response => {//http://localhost:3001
            return response.json()
        }).then(project => dispatch({ type: 'ADD_PROJECT', payload: project }));
    };
}

export function addTodo(url, data) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',                
                'Authorization': 'Token ' + paramsConnected().token
            },
            body: JSON.stringify(data)
        }).then(response => {//http://localhost:3001
            return response.json()
        }).then(project => dispatch({ type: 'UPDATE_PROJECT', payload: project }));
    };
}