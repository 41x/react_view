/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var api = [
    {
        "name": "Tenders",
        "url": "http://dev.initpro.ru/applicants/Table1.json"
    },
    {
        "name": "Companies",
        "url": "http://dev.initpro.ru/applicants/Table2.json"

    }];

ReactDOM.render(
    <App api={api}/>
    , document.getElementById('root')
);