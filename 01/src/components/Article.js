import React, {Component} from 'react';
import Comments from './Comments';

//Перепишем на компонент из класса
export default class Article extends Component{
    constructor(props){
        super(props);

        this.state ={
            isOpen: false
        };

        this.toggler = this.toggler.bind(this);

    }

    render(){
        let {title} = this.props.db;

        return (
            <article>
                <h2>{title}</h2>
                {this.getText()}
                {this.getBtn()}
            </article>
        );
    }

    getText(){
        if(!this.props.isOpen){return null;}
        let {text, comments} = this.props.db;
        return <div className = "text">{text} <Comments comments={comments} /> </div>
    }

    getBtn(){
        let text = this.props.isOpen ? 'скрыть текст' : 'показать текст';

        return (
            <div style={{'marginTop': '10px'}}>
                <button onClick={this.toggler}>{text}</button>
            </div>
        );

    }

   /* toggler(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }*/

    toggler(){
        this.props.toggler(this.props.db.id); //вызываем родительский метод и перестраиваем DOM
    }


}