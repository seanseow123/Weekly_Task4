import * as actions from './actionType';

const initState = {
    scorecard: [],
    popplayers: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_SCORE:
            console.log(action);
            return { ...state, scorecard: [...state.scorecard, action.payload] }
        case actions.REMOVE_SCORE:
            return { ...state, scorecard: state.scorecard.filter((info => info.id != action.payload))}
        case actions.GET_POSTS:
            console.log(action.payload.httpResponse);
            return { ...state, popplayers: action.payload.httpResponse }
        default:
            return state;
    }

}

export default reducer;