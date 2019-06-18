const CLIENT_ID = "";
const CLEINT_SECRET = "";
let TOKEN = "";



export function startConnection() {
    return (dispatch) => {
        dispatch({ type: 'CONNECTION_LOADING' });
        return fetch('/api/v1/connect', {//http://localhost:3001
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'grant_type': 'client_credentials'
            },
            body: JSON.stringify({
                client_id: paramsConnected().client_id,
                client_secret: paramsConnected().client_secret
            })
        }).then(response => {
            return response.json()
        })
        .catch((error) => {
            console.error(error);
            dispatch({ type: 'SESSION_ERROR' });
        });
    };
}

export function login(data) {
    return (dispatch) => {
        dispatch({ type: 'CONNECTION_LOADING' });
        return fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',                
                'Authorization': JSON.stringify({ client_id: paramsConnected().client_id })
            },
            body: JSON.stringify(data)
        }).then(response => {//http://localhost:3001
            return response.json()
        }).then(session => {
            TOKEN = session.api_token;
            dispatch({ type: 'LOGIN', payload: session.user });
        })
        .catch((error) => {
            console.error(error);
            dispatch({ type: 'SESSION_ERROR' });
        });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: 'CONNECTION_LOADING' });
        return fetch('/api/v1/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
                'Authorization': 'Token ' + paramsConnected().token
            }
        }).then(() => { 
            TOKEN = "";
            dispatch({ type: 'LOGOUT' });
        })
        .catch((error) => {
            console.error(error);
            dispatch({ type: 'SESSION_ERROR' });
        });
    };
}

export function paramsConnected() {
    return {
        client_id: CLIENT_ID,
        client_secret: CLEINT_SECRET,
        token: TOKEN
    };
}



// completed = (id) => {
//     var details = {
//         'id': id,

//     };

//     var formBody = [];
//     for (var property in details) {
//         var encodedKey = encodeURIComponent(property);
//         var encodedValue = encodeURIComponent(details[property]);
//         formBody.push(encodedKey + "=" + encodedValue);
//     }
//     formBody = formBody.join("&");

//     fetch(markcompleted, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: formBody
//     })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log(responseJson, 'res JSON');
//             if (responseJson.status == "success") {
//                 console.log(this.state);
//                 alert("your todolist is completed!!");
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// };

