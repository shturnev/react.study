import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component{
    constructor(props){
        super(props);
        this.state = {openArticle: false};
        this.toggler = this.toggler.bind(this);

    }

    toggler(articleId){
        this.setState({
            openArticle: articleId
        });
    }

    render(){
        return <OriginalComponent {...this.props} {...this.state} toggler = {this.toggler}/>
    }

}
