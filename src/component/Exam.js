import React, { Component } from 'react';

class Exam extends Component {
    render() {
        const { data } = this.props
        return (
            <h1>{data}</h1>
        )
    }
}

export default Exam;