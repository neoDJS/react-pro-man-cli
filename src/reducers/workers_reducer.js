
export default function WorkersReducer(state = { loading: false, list: [] }, action) {
    switch (action.type) {

        case 'LOADING_WORKERS':
            return {...state, loading: true }

        case 'FETCH_WORKERS':
            return { loading: false, list: action.payload }

        default:
            return state;
    }
}