import axios from 'axios';
import {nyTimesIsbns} from '../isbnData'

export const ACTIONS = {
    AXIOS_GET_START : '...gettting axios data, please wait',
    AXIOS_GET_SUCESS : 'got data!',
    AXIOS_GET_FAIL : 'failed to get data. please try again or contact webmaster.'
};

export const getBookData = (isbn) => (dispatch) => {
    dispatch({
        type: ACTIONS.AXIOS_GET_START
    })
    setTimeout(()=> {
        axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
        .then(res => {
            dispatch({
                type: ACTIONS.AXIOS_GET_SUCESS,
                payload: {
                    title: res.data[`ISBN:${isbn}`].title,
                    author: res.data[`ISBN:${isbn}`].authors.map(author => author.name),
                    isbn: res.data[`ISBN:${isbn}`].identifiers.isbn_13[0],
                    subjects: res.data[`ISBN:${isbn}`].subjects ? res.data[`ISBN:${isbn}`].subjects.map(sub => sub.name).join(' / ') : 'No subjects available.',
                    publish_date: res.data[`ISBN:${isbn}`].publish_date,
                    publisher: res.data[`ISBN:${isbn}`].publishers ? res.data[`ISBN:${isbn}`].publishers.map(pub => pub.name).join(' & ') : 'Publisher unavailable',
                    ol_url: res.data[`ISBN:${isbn}`].url
                }
            })
            console.log(ACTIONS.AXIOS_GET_SUCESS, res.data[`ISBN:${isbn}`])
        })
        .catch(err => {
            dispatch({
                type: ACTIONS.AXIOS_GET_FAIL, 
                payload: err.message
            })
            console.error(err)});
    }, 3000)  
}