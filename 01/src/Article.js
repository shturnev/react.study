import React, {Component} from 'react';

//простой stateless компонент
/*
export default function Article(props) {
    return (
        <article>
            <h2>{props.db.title}</h2>
            <div className = "text">{props.db.text}</div>
        </article>
    );
}*/


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
        if(!this.state.isOpen){return null;}
        let text = this.props.db.text;
        return <div className = "text">{text}</div>
    }

    getBtn(){
        let text = this.state.isOpen ? 'скрыть текст' : 'показать текст';

        return (
            <div style={{'marginTop': '10px'}}>
                <button onClick={this.toggler}>{text}</button>
            </div>
        );

    }

    toggler(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


}