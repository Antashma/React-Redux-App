import React from 'react';
import { nyTimesIsbns } from '../isbnData';

const Book = ({bookData}) => {
    return (
        <div>
            <p className='isbn'>ISBN-13: {bookData.isbn}</p>
            <h2>{bookData.title}</h2>
            <p className='author'>by {bookData.author.length > 1 ? bookData.author.join(' & ') : bookData.author}</p>
            <p className='subject'>You'll like this book if you enjoy: {bookData.subjects}</p>
            <p className='pubInfo'>Published by: {bookData.publisher}, {bookData.publish_date}</p>
            <p>See on <a href={bookData.ol_url} target='_blank' rel="noopener noreferrer">OpenLibary</a></p>
        </div>
    )
}


const Books = (props) => {
    return (
        <section>
            <div className='btn-container'>
                {nyTimesIsbns.map((item, index) => {
                    return <button key={index} onClick={() => props.getBookData(item.id)}>#{index + 1}</button>
                })}
            </div>
            {props.bookData.title === '' 
                ? <p>Press one of the numbered buttons above to see the book at that rank.</p> 
                : <Book bookData = {props.bookData} />}
        </section>
    )
}

export default Books;