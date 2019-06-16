
export default function UsersReducer(state = { loading: false, list: [] }, action) {
    switch (action.type) {

        case 'LOADING_USERS':
            return {...state, loading: true }

        case 'FETCH_USERS':
            return { loading: false, list: action.payload }

        default:
            return state;
    }
}