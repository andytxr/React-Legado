import React, {Component} from 'react';

import Family from "./family";
import Member from "./familyMember"

export default class ClassComponent extends Component {

    render() {

        return (

            <div>
                <h1>{this.props.value}</h1>
                <Family lastName="Teixeira">
                    <Member name="Deco"/>
                    <Member name="Allan"/>
                </Family>
            </div>

        )

    }

}