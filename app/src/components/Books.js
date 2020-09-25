import React from 'react';
import { nyTimesIsbns, img } from '../isbnData';

const Book = ({bookData}) => {
    return (
        <div>
            <p>ISBN-13: {bookData.isbn}</p>
            <h2>{bookData.title}</h2>
            <p>by {bookData.author.length > 1 ? bookData.author.join(' & ') : bookData.author}</p>
            <p>You'll like this book if you enjoy: {bookData.subjects}</p>
            <p>Published by: {bookData.publisher}, {bookData.publish_date}</p>
            <p>See on <a href={bookData.ol_url} target='_blank'>OpenLibary</a></p>
        </div>
    )
}


const Books = (props) => {
    return (
        <section>
            {nyTimesIsbns.map((item, index) => {
                return <button key={index} onClick={() => props.getBookData(item.id)}>#{index + 1}</button>
            })}
            {props.bookData.title === '' 
                ? <p>book will display after you press the button</p> 
                : <Book bookData = {props.bookData} />}
        </section>
    )
}

export default Books;