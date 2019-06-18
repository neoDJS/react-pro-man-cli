import { paramsConnected } from './sessionActions'

export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' });
        return fetch('/api/v1/users').then(response => {
            return response.json()
        }).then(users => dispatch({ type: 'FETCH_USERS', payload: users }));
    };
}

export function addUser(data) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' });
        return fetch('/api/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',                
                'Authorization': 'Token ' + paramsConnected().token
            },
            body: JSON.stringify(data)
        }).then(response => {//http://localhost:3001
            return response.json()
        }).then(user => dispatch({ type: 'ADD_USER', payload: user }))
        .catch((error) => {
            console.error(error);
            dispatch({ type: 'USER_ERROR' });
        });
    };
}