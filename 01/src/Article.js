import React from 'react';

export default function Article(props) {
    return (
        <article>
            <h2>{props.db.title}</h2>
            <div className = "text">{props.db.text}</div>
        </article>
    );
}