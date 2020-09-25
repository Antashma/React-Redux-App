import {ACTIONS} from '../actions'

const initialState = {
    bookData: {
        title: '',
        author: [],
        isbn: '',
        subjects: [],
        publish_date: '',
        publisher:  '',
        ol_url:  ''
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
                    isbn: action.payload.isbn,
                    subjects: action.payload.subjects,
                    publish_date: action.payload.publish_date,
                    publisher: action.payload.publisher,
                    ol_url: action.payload.ol_url
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