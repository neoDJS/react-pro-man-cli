
export function fetchProjects() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch('/api/projects.json').then(response => {//http://localhost:3001
            return response.json()
        }).then(projects => dispatch({ type: 'FETCH_PROJECTS', payload: projects }));
    };
}