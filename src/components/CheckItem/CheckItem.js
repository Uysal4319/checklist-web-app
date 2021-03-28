import React, {Component} from 'react';
import {Checkbox} from "semantic-ui-react";

class CheckItem extends Component {


    render() {

        return (
            <div className={'item'}>
                <h2>{this.props.text}</h2>
                <Checkbox className = {'checkBox'}/>
            </div>
        );
    }
}

export default CheckItem;
