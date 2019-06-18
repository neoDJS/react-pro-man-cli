
export default function SessionReducer(state = { loading: false, login: {} }, action) {
    switch (action.type) {

        case 'CONNECTION_LOADING':
            return {...state, loading: true }

        case 'LOGOUT':
            return { loading: false, login: {} }
        case 'LOGIN':
            return { loading: false, login: action.payload }

        default:
            return state;
    }
}