import React, {Component} from 'react';

/*
export default class Comment extends Component{
    constructor(props){
        super(props);
    }
}*/

export default function Comment(props){

    return (
        <div className="comment" style={{marginBottom: '10px'}}>
            <div className="user"><b>{props.comment.user}</b></div>
            <div className="comment-text">{props.comment.text}</div>
        </div>
    );
}
