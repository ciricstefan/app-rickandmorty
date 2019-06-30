import ACTIONS from "./action"
import _ from "lodash"

const defaultState = {
    liked: []
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.LIKE_CHARACTER: {
            console.log(action);
            let item = action.payload;
            let newState = _.cloneDeep(state);
            if (!newState.liked.includes(item)) {
                newState.liked.push(item);
            }
            return newState;
        }

        case ACTIONS.Types.UNLIKE_CHARACTER: {
            console.log(action);
            let item = action.payload;
            let newState = _.cloneDeep(state);
            let index = newState.liked.indexOf(item);
            if(index > -1) {
                newState.liked.splice(index, 1);
            }
            return newState;
        }

        default:
            return state;
    }
};

export default todoReducer;