import React,{Component} from 'react';
import {articles as db} from '../db.js';
import Article from './Article';


export default function Articles() {

    let elems = db.map(item => <Article db={item} key={item.id} />  );

    return (
        <div className='articles'>{elems}</div>
    );
}
