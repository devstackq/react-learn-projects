import React from 'react'
import Display from './Display'
import Controls from '../components/Controls'

class Timer extends React.Component {

    state = {
        seconds: 0,
        time: 0,
        status: null
    };


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSecondChanged = (seconds) => {
        seconds = parseInt(seconds)
        //change seconds, 
        if (seconds && typeof seconds === 'number') {
            if (seconds <= 359999) {
                this.setState(() => ({ seconds: seconds, time: seconds * 1000 }))
            }
        } else {
            //default val -0
            this.setState(() => ({ seconds: 0, time: 0 }))
        }
    }



    startTimer = () => {
        if (this.state.status !== 'started') {
            this.interval = setInterval(() => {
                if (this.state.time !== 0) {
                    //time !== 0, - 10 mlsec, each 10 mlsec interval
                    this.setState(prevState => ({ time: prevState.time - 10 }))
                } else {
                    this.setState(() => ({ seconds: 0, status: null, time: 0 }))
                    clearInterval(this.interval)
                }
            }, 10)
            this.setState(() => ({ status: 'started' }))
        }
    }
   
    //clearInterval - stop time
    //stop timer func
    stopTimer = () => {
        if (this.state.status && this.state.status === 'started') {
            //stop time
            clearInterval(this.interval)
            // set last value, 32000/ 1000
            this.setState((prevState)=> {
                return ({
                    seconds: Math.floor(prevState.time / 1000),
                     status: 'stopped'
                })
            })
          //  this.setState(() => ({ seconds: 0, status: 'stopped' }))
        }
    }

    resetTimer = () => {
        clearInterval(this.interval)
        this.setState(() => ({ seconds: 0, status: null, time: 0 }))
    }

    render() {
        return (
            <div>
                {/* shoow time, status etc */}
                <Display
                    //mlsec -> send Display comp
                    time={this.state.time}
                    status={this.state.status}
                    onSecondChanged={this.onSecondChanged}>
          
                {/* controls, start, stop func, manipulate */}
                <div>
                    <Controls startTimer={this.startTimer}
                        stopTimer={this.stopTimer}
                        resetTimer={this.resetTimer}
                        status={this.state.status}
                        
                        canStart={this.state.seconds > 0} />

                </div>
                
                </Display>
                </div>
                );
            
            }
        
        }
export default Timer;