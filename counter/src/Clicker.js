import React, { Component } from 'react';

class Clicker extends Component {
    state = { count: 0 }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 })
    }

    resetCount = () => {
        this.setState({ count: 0 })
    }
    render() {
        return (

            <div >
                <div >{this.state.count}</div>

                <div>
                    <button onClick={this.incrementCount}> + </button>
                    <button onClick={this.decrementCount}> - </button>
                    <button onClick={this.resetCount}> reset </button>
                </div>
            </div>
        );
    }
}

export default Clicker;