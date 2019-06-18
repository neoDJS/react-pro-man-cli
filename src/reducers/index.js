
import ProjectsReducer from './projects_reducer'
import UsersReducer from './users_reducer'
import WorkersReducer from './workers_reducer'
import SessionReducer from './session_reducer'
import { combineReducers } from 'redux'

// import TodosReducer from './todos_reducer'




const rootReducer = combineReducers({
    projects: ProjectsReducer,
    // todos: TodosReducer,
    workers: WorkersReducer,
    users: UsersReducer,
    session: SessionReducer
});

export default rootReducer