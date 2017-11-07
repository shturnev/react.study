import {articles as db} from './db.js';
import React from 'react';
import {render} from 'react-dom';

//components
import Articles from './components/Articles';
import DataPicker from './components/DataPicker';

//styles
import './style/test.css';

render(
    <div>
        <DataPicker/>
        <Articles />
    </div>,
    document.getElementById('root')
);


