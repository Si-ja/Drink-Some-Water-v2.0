import React, { Component } from "react";
import logo from '../logo.svg';

class MainSource extends Component<{className: string, name: string, multiplier: number}, {amount: number}> {
    className: string;
    name: string;
    multiplier: number;

    constructor(props?: any) {
        super(props);
        this.className = props.className;
        this.name = props.name;
        this.multiplier = props.multiplier;

        this.state = {
            amount: 0
        }

        this.increaseAmount = this.increaseAmount.bind(this)
    }

    increaseAmount() {
        this.setState((prevState, props) => ({
            amount: prevState.amount + this.multiplier
        }))
    }

    render() {
        return React.createElement(
            "div",
            {
                onClick: this.increaseAmount
            },
            React.createElement(
                "h5",
                null,
                `${this.name}: ${this.state.amount}`
            ),
            React.createElement(
                "img",
                {
                    src: logo,
                    alt: this.name,
                    class: this.className,
                },
                null
            )
        );
    }
}

export default MainSource;