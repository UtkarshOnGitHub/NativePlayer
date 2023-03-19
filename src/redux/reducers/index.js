import { combineReducers } from 'redux';
import newReducer from './newReducer';
// import songReducer from './songReducer';



const reducers = combineReducers({
    // allsongs: songReducer,
    new:newReducer
})


export default reducers;