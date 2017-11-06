import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggler = this.toggler.bind(this);
    }

    toggler() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return <OriginalComponent {...this.props} {...this.state} toggler = {this.toggler}/>
    }
}


