import React from "react";
import ReactDOM from 'react-dom';

import Component from './components/component';
import Family from "./components/family";

ReactDOM.render(

    <div>
        <Component.First/>
        <Component.Second/>
        <Family/>
    </div>

, document.getElementById('app'));
