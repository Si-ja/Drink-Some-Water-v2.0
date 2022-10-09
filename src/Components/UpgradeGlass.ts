import React, { Component } from "react";

import '../CSS/Style.css'

import glass from '../Graphics/glass.png'

class UpgradeGlass extends React.Component<{className: string}, {}> {
    className: string;

    constructor(props?: any) {
        super(props);

        this.className = props.className;
    }

    render() {
        return React.createElement(
            "div",
            {
                className: 'UpgradeComponent'
            },
            React.createElement(
                "img",
                {
                    src: glass
                },
                null
            ),
            React.createElement(
                "p",
                {
                    className: 'mainDescription'
                },
                "Hello"
            )
        );
    }
}

export default UpgradeGlass;