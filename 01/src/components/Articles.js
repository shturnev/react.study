import React,{Component} from 'react';
import {articles as db} from '../db.js';
import Article from './Article';


/*export default function Articles() {

    let elems = db.map(item => <Article db={item} key={item.id} />  );

    return (
        <div className='articles'>{elems}</div>
    );
}*/



export default class Articles extends Component{
    constructor(props){
        super(props);

        this.state = {openArticle: false};
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render(){
        let elems = db.map(item =>
            <Article
                db={item}
                key={item.id}
                isOpen={item.id === this.state.openArticle}
                toggler={this.toggleOpen}
            />
        );


        return (
            <div className='articles'>{elems}</div>
        );
    }

    toggleOpen(articleId){
        this.setState({
            openArticle: articleId
        });
    }


}
