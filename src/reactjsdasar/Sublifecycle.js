import React, { Component } from 'react'

export default class Sublifecycle extends Component {
    
    componentWillUnmount(){
        this.props.ubahMakanan("sate")
    }

    render() {
        return (
            <div>
                <h2>Component Sublifecycle</h2>
            </div>
        )
    }
}
