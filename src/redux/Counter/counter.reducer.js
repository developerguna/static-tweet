import { INCREMENT, DECREMENT } from './counter.types';


    const INITIAL_STATE = {

        count: typeof window === 'object' ? window.innerWidth : null,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case INCREMENT:

               return {

                 ...state, count: window.innerHeight,

               };

            case DECREMENT:

               return {
                  ...state, count: window.innerWidth,

               };

             default: return state;

        }

    };

    export default reducer;