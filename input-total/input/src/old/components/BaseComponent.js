import React, { Component } from 'react'
import Input from './Input'

export default class BaseComponent extends Component {
    render() {
        return (
            <div className="base-component">
                <div className="main-input-full" >
                    <div className="tdselect">
                        <div className="pseudoinput hasarrow" >
                            <div className="autosizeinput">
                            <Input />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
