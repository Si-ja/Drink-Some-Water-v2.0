import React, { Component } from "react";

import '../CSS/Style.css';

class MainText extends Component<{}, {}> {
    constructor(props?: any) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            null,
            // Game Name
            React.createElement(
                "h1",
                {
                    className: 'mainText'
                },
                "Drink Some Water v2"
            ),
            // Intro Text
            React.createElement(
                "p",
                {
                    className: 'mainDescription'
                },
                'Hello there traveler. Sit down, drink some water, stay hydrated. \
                If you will need more - don\'t be shy. Click on the bottle and consume more. \
                Or contribute to making more by purchasing upgrades!'
            )
        );
    }
}

export default MainText;