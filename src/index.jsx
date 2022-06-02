import React from "react";
import ReactDOM from 'react-dom';

import Component from './components/component';
import Family from "./components/family";
import Member from "./components/familyMember"

ReactDOM.render(

    <div>
        <Component.First/>
        <Component.Second/>
        <Family lastName="Teixeira">
            <Member name="Deco"/>
            <Member name="Allan"/>
        </Family>
    </div>

, document.getElementById('app'));
