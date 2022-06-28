import { combineReducers } from 'redux';


    import counterReducer from './Counter/counter.reducer.js';
    import globalReducer from "./global/global.reducer.js"


    const rootReducer = combineReducers({

        counter: counterReducer,
        global:globalReducer

    });

    export default rootReducer;