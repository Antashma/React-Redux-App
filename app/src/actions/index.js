import axios from 'axios';
import {nyTimesIsbns} from '../isbnData.js';

export const ACTIONS = {
    AXIOS_GET_START : '...gettting axios data, please wait',
    AXIOS_GET_SUCESS : 'got data!',
    AXIOS_GET_FAIL : 'failed to get data. please try again or contact webmaster.'
};

const isbn = nyTimesIsbns[3];

export const getBookData = () => (dispatch) => {
    dispatch({
        type: ACTIONS.AXIOS_GET_START
    })
    setTimeout(()=> {
        axios.get(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
        .then(res => {
            dispatch({
                type: ACTIONS.AXIOS_GET_SUCESS,
                payload: {
                    title: res.data[`ISBN:${isbn}`].title,
                    author: res.data[`ISBN:${isbn}`].by_statement
                }
            })
            console.log(ACTIONS.AXIOS_GET_SUCESS, res.data)
        })
        .catch(err => {
            dispatch({
                type: ACTIONS.AXIOS_GET_FAIL, 
                payload: err.message
            })
            console.error(err)});
    }, 3000)
}