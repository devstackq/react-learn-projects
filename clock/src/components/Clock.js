import React from 'react'
import Display from "./Display";

class Clock extends React.Component {
    // init state, date object
    state = {
        date: new Date()
    };

    //1
    componentDidMount() {
        this.startTime()
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // 2,  start time, when component mounted, each 1 sec, show time
    startTime = () => {
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date() }));
        }, 1000);
    }
    //show time, with Display Component
    render() {
        // style, 1 of the methods
        const timeStyle = {
            margin: 'auto',
            background: 'black',
            color: 'white',
            width: '300px',
            height: '100px',
            display: 'flex',
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center'
        }
        return (
            
            <div style={timeStyle}>
                <Display time={this.state.date} />
            </div>
        )
    }
}
export default Clock