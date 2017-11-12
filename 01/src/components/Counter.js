import React, {Component} from 'react';
import store from '../store';
import {increment} from '../AC'


class Counter extends Component{
    constructor(){
        super();

        this.state = {
            counter: store.getState()
        }
    }

    componentDidMount(){
        //на выходе создаёт ф-ию для отписки за слежением
        this.unsubscribe = store.subscribe(this.handleStoreChange);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleStoreChange = () =>{
        this.setState({
            counter: store.getState()
        });
    }


    render(){
        return <div>
            <h2>{this.state.counter}</h2>
            <button onClick={this.handleIncrement}>increment</button>
        </div>
    }

    handleIncrement = ev =>{
        store.dispatch(increment())

    }
    
}

export default Counter;