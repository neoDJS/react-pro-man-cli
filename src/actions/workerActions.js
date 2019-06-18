import { paramsConnected } from './sessionActions'

export function fetchWorkers() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_WORKERS' });
        return fetch('/api/v1/workers').then(response => {
            return response.json()
        }).then(workers => dispatch({ type: 'FETCH_WORKERS', payload: workers }));
    };
}

export function addWorker(data) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROJECTS' });
        return fetch('/api/v1/workers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',                
                'Authorization': 'Token ' + paramsConnected().token
            },
            body: JSON.stringify(data)
        }).then(response => {//http://localhost:3001
            return response.json()
        }).then(worker => dispatch({ type: 'ADD_WORKER', payload: worker }))
        .catch((error) => {
            console.error(error);
            dispatch({ type: 'WORKER_ERROR' });
        });
    };
}