import axios from "axios";
import * as actions from './actionType';

export const onAddScore = (item) => {

    return {
        type: actions.ADD_SCORE,
        payload: item
    }
}

export const onDelete = (id) => {
    
    return {
        type: actions.REMOVE_SCORE,
        payload: id
    }
}

export const onGetPlayers = () => {
    return (dispatch) => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then((res => {

            // self-invoking function
            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )

        })).catch(err => console.log(err))
    }
}