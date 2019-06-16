
export default function ProjectsReducer(state = { loading: false, list: [] }, action) {
    switch (action.type) {

        case 'LOADING_PROJECTS':
            return {...state, loading: true }

        case 'FETCH_PROJECTS':
            return { loading: false, list: action.payload }

        default:
            return state;
    }
}