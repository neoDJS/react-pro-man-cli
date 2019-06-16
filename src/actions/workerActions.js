
export function fetchWorkers() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_WORKERS' });
        return fetch('/api/workers.json').then(response => {
            return response.json()
        }).then(workers => dispatch({ type: 'FETCH_WORKERS', payload: workers }));
    };
}