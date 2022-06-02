import React from "react";
import ReactDOM from 'react-dom';

import Component from './components/component';
import ClassComponent from './components/classComponent'

ReactDOM.render(

    <div>
        <Component.First/>
        <Component.Second/>
        <ClassComponent value="Componente de Classe"></ClassComponent>
    </div>

, document.getElementById('app'));
