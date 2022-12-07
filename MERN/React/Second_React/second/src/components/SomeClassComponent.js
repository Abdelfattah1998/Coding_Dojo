import React, { Component } from 'react';


class SomeClassComponent extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
                    <h3>Age:{this.props.age}</h3>
                    <h3>Hair Color: {this.props.hairColor}</h3>
                </div>
            </div>
        );
    }
}

export default SomeClassComponent;
