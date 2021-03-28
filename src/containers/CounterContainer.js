import React from 'react'
import Counter from "../components/Counter";
class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((oldState) => {
            return { count: oldState.count + 1 };
        });
    }

    render() {
        return <Counter count={this.state.count} increment={this.increment} />
    }
}

export default CounterContainer;