import {ACTIONS} from '../actions'

const initialState = {
    bookData: {
        title: '',
        author: '',
    },
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.AXIOS_GET_START:
            return {
                ...state,
                isLoading: true
            };
        case ACTIONS.AXIOS_GET_SUCESS:
            return {
                ...state,
                bookData: {
                    title: action.payload.title,
                    author: action.payload.author,
                },
                isLoading: false
            };
        case ACTIONS.AXIOS_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: 'PAYLOAD INFO HERE'
            };
        default:
            return state;
    }
}