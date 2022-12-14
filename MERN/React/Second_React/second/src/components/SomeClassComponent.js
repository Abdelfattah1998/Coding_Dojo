import React, { Component } from 'react';


class SomeClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.agey
        };
    }
    render() {
        return (
            <div>
                <div>
                <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
                    <h3>Age:{this.state.age}</h3>
                    <h3>Hair Color: {this.props.hairColor}</h3>
                    <button onClick={ () => { this.setState({age:this.state.age+1})} }>Increment Age</button>
                </div>
            </div>
        );
    }
}

export default SomeClassComponent;
