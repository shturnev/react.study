var ReactDOM = require('react-dom');
var React = require('react');
// var NotesApp = require('./components/NotesApp.jsx');
import {NotesApp} from './components/NotesApp.jsx';

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);