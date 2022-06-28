import { GET_HAMBURGER_ACTIVE, GET_IS_MOBILE } from "./global.types";
const INITIAL_STATE = {

    ismobile: typeof window === 'object' ? window.innerWidth < 560 ? true : false : null,
    isHamburgerActive : false,
};
const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_IS_MOBILE:

           return {

             ...state, ismobile:   window.innerWidth < 560 ? true : false         };
        case GET_HAMBURGER_ACTIVE:
            return{
                ...state,isHamburgerActive:!state.isHamburgerActive
            }

         default: return state;

    }

};

export default reducer;