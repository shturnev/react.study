import React from 'react';
import {render} from 'react-dom';
import Counter from './components/Counter'

//components
import Articles from './components/Articles';
import DataPicker from './components/DataPicker';

//styles
import './style/test.css';

render(
    <div>
        <Counter/>
        <hr/>
        <DataPicker/>
        <Articles />
    </div>,
    document.getElementById('root')
);


