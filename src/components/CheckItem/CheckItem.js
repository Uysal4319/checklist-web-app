import React, {Component} from 'react';
import {Checkbox} from "semantic-ui-react";

class CheckItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.article.status,
        };
        this.selected = false;
    }

    selectItems(){
        this.setState({ selected: !this.state.selected})
    }

    componentDidUpdate(){
    }

    render() {
        if(this.props.selected != null && this.props.selected.id === this.props.article.id){

            this.selected = true;

        }else {
            this.selected = false;
        }
        return (
            <div  className={ this.selected ? 'selectItem':'item'} onClick={this.props.onSelectedItems}>

                <h2>{this.props.article.text}</h2>
                <Checkbox className = {'checkBox'}
                          checked={this.state.checked}
                          onChange={() => this.setState({ checked: !this.state.checked})}
                />
            </div>
        );
    }
}

export default CheckItem;
