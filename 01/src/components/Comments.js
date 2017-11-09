import React, {Component} from 'react';
import Comment from './Comment';
// import PropTypes from 'prop-types';
import toggler from '../decorators/toggleDecorator';
import AddCommentForm from './AddCommentForm';

class Comments extends Component{

    constructor(props){
        super(props);

        // this.state   = {isOpen: false};
        // this.toggler = this.toggler.bind(this);

    }


    render(){
        if(!this.props.comments.length){return <div><AddCommentForm/></div>;}
        return (
            <div className="comments-cont" style={{margin: '15px'}}>
                <button className="toggler" onClick={this.props.toggler}>{this.props.isOpen ? 'скрыть': 'показать'} комментарии</button>
                {this.getBody()}
            </div>
        );
    }

    getBody(){
        if(!this.props.isOpen)return null;

        let elems = this.props.comments.map(item => <Comment comment={item} key={item.id} />);
        return (
            <div>
                <AddCommentForm/>
                <ul className="comments-list">{elems}</ul>
            </div>
        );
    }

    /*toggler(){ //перенёс метод в декоратор
        this.setState({
            isOpen: !this.state.isOpen
        });
    }*/

}

Comments.defaultProps = { //таким образом можно объявить стандартные значения для props
    comments: []
};

export default toggler(Comments) //вызов декоратора
