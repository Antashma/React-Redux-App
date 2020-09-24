import React from 'react';


const Books = (props) => {
    return (
        <section>
            <h2>{props.data.title}</h2>
            <p>{props.data.author}</p>
            <div>extra stuff</div>
        </section>
    )
}

export default Books;