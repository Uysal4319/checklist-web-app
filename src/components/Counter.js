import React, {Component} from 'react';

class Counter extends Component {

    render() {
        return (
            <div>
                <p>The count is {this.props.count}.</p>
                <button onClick={this.props.increment}> increment </button>
            </div>
        );
    }
}

export default Counter;