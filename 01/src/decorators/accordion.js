import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component{
    constructor(props){
        super(props);
        this.state = {openArticle: false};
        this.toggler = this.toggler.bind(this);

    }

    toggler(articleId){

        let newValue = (articleId === this.state.openArticle)? false : articleId;

        this.setState({
            openArticle: newValue
        });
    }

    render(){
        return <OriginalComponent {...this.props} {...this.state} toggler = {this.toggler}/>
    }

}
