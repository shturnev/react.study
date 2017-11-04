import {articles as db} from './db.js';
import React from 'react';
import {render} from 'react-dom';
import Article from './Article';

render(<Article db={db[0]} />, document.getElementById('root'));


