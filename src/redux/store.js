import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getisMobile } from './global/global.actions';
const store = createStore(

    rootReducer,

    composeWithDevTools(),

);
window.addEventListener("resize", () => {
    store.dispatch(getisMobile(window.innerWidth))
})

    export default store;