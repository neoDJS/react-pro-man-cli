
export default function TodosReducer(state = { loading: false, list: [] }, action) {
    switch (action.type) {

        case 'LOADING_TODOS':
            return {...state, loading: true }

        case 'FETCH_TODOS':
            return { loading: false, list: action.payload }

        default:
            return state;
    }
}