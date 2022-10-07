import React, { Component } from "react";
import logo from '../logo.svg';

// Main Water Bottle of the game that can be harvested forever
class MainSource extends Component<{className: string, name: string, incrementor: number}, {amount: number}> {
    className: string;
    name: string;
    incrementor: number;

    constructor(props?: any) {
        super(props);
        this.className = props.className;
        this.name = props.name;
        this.incrementor = props.incrementor;

        this.state = {
            amount: 0,
        }

        this.increaseAmount = this.increaseAmount.bind(this);
        this.updateIncrementor = this.updateIncrementor.bind(this);
    }

    // Increase amount of units harvested
    increaseAmount() {
        this.setState((prevState, props) => ({
            amount: prevState.amount + this.incrementor
        }))
    }

    // Update the incrementor that works as the multiplier for the amount of bottle harvested by a click
    updateIncrementor(magnitudeOfUpdate: number) {
        this.incrementor *= magnitudeOfUpdate;
    }

    render() {
        // An overall div
        return React.createElement(
            "div",
            {
                onClick: this.increaseAmount
            },
            // Text notation describing the bottle and amount of items that exist after harvest
            React.createElement(
                "h5",
                null,
                `${this.name}: ${this.state.amount}`
            ),
            // Image representing the bottle component
            React.createElement(
                "img",
                {
                    src: logo,
                    alt: this.name,
                    className: this.className,
                },
                null
            )
        );
    }
}

export default MainSource;