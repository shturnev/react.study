import React, {Component} from 'react';
import Comment from './Comment';

export default class Comments extends Component{
    constructor(props){
        super(props);

        this.state   = {isOpen: false};
        this.toggler = this.toggler.bind(this);
    }

    render(){
        if(!this.props.comments){return null;}
        return (
            <div className="comments-cont" style={{margin: '15px'}}>
                <button className="toggler" onClick={this.toggler}>{this.state.isOpen ? 'скрыть': 'показать'} комментарии</button>
                {this.getBody()}
            </div>
        );
    }

    getBody(){
        if(!this.state.isOpen)return null;

        let elems = this.props.comments.map(item => <Comment comment={item} key={item.id} />);
        return <ul className="comments-list">{elems}</ul>;
    }

    toggler(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}
