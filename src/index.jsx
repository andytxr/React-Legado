import React from "react";
import ReactDOM from 'react-dom';

import Component from './components/component';
import ClassComponent from './components/classComponent'
import Counter from "./components/counter";

ReactDOM.render(

    <div>
        <Component.First/>
        <Component.Second/>
        <ClassComponent value="Componente de Classe"></ClassComponent>
        <Counter label="Contador" initialValue={10}></Counter>
    </div>

, document.getElementById('app'));
