import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component{

    addTrack = ev => {
        this.props.onAddTrack(this.trackInput.value);

        this.trackInput.value = '';
    }


    render(){
        console.log(this.props.testStore);
        
        return (
                <div>
                    <input type="text" ref={(input) => {this.trackInput = input}} />
                        <button onClick={this.addTrack}>Добавить</button>
                        <ul>
                            {this.props.testStore.map((item, key) =>
                                <li key={key}>{item}</li>
                            )}
                        </ul>
                </div>
            );
    }

}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch =>({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);