import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { now: new Date() };
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime() {
        this.setState({ now: new Date() });
    }

    render() {
        return (
            <div>
                <h1>Saat : {this.state.now.toLocaleTimeString()}</h1>
                <h1>Güncel saat için tıklayın..</h1>
                <button onClick={this.updateTime}>Update the clock</button>
            </div>
        );
    }
}
export default Clock;