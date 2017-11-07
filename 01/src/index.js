import {articles as db} from './db.js';
import React from 'react';
import {render} from 'react-dom';
import Articles from './components/Articles';
import './style/test.css';

render(<Articles />, document.getElementById('root'));


