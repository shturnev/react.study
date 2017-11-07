import React,{Component} from 'react';
import {articles as db} from '../db.js';
import Article from './Article';
import accordion from '../decorators/accordion';



/*export default function Articles() {

    let elems = db.map(item => <Article db={item} key={item.id} />  );

    return (
        <div className='articles'>{elems}</div>
    );
}*/



class Articles extends Component{
   /* constructor(props){
        super(props);

        // this.state = {openArticle: false};
        // this.toggleOpen = this.toggleOpen.bind(this);
    }*/

   state = {
       sht: true
   }

    render(){
        let elems = db.map(item =>
            <Article
                db={item}
                key={item.id}
                isOpen={item.id === this.props.openArticle}
                toggler={this.props.toggler}
            />
        );


        return (
            <div className='articles'>{elems}</div>
        );
    }

    /*toggleOpen(articleId){
        this.setState({
            openArticle: articleId
        });
    }*/
}

export default accordion(Articles); //вынес toggler в отдельный декоратор
