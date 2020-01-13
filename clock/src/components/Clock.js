import React from 'react'
import Display from "./Display";

class Clock extends React.Component {
    state = {
        date : new Date()
    };

    componentDidMount() {
        this.startTime()
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // start time, when component mounted, each 1 sec, show time
    startTime = () => {
        this.timer = setInterval(()=> {
            this.setState(() => ( {date: new Date() }));
        }, 1000);
    }

    render() {
        return (
                <div>
                    <Display time = {this.state.date} />
                </div>
        )
    }
    

}
export default Clock