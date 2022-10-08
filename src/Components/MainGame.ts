import React, { Component } from "react";

import '../CSS/Helper.css';
import '../CSS/Style.css';

import MainSource from "./MainSource";
import MainText from "./MainText";

class MainGame extends Component<{}, {}> {
    WaterBottle: React.RefObject<MainSource>;

    WaterBottleMultiplier: number;

    constructor(props?: any) {
        super(props);
        this.WaterBottle = React.createRef();

        this.WaterBottleMultiplier = 1;

        this.updateWaterBottleMultiplier = this.updateWaterBottleMultiplier.bind(this);
    }

    updateWaterBottleMultiplier(magnitude: number) {
        this.WaterBottleMultiplier *= magnitude;
        this.WaterBottle.current?.updateIncrementor(magnitude);
    }

    render() {
        // Main div to hold the game data
        return React.createElement(
            "div",
            null,
            // Intro Text
            React.createElement(
                MainText,
                {
                    className: 'mainText'
                },
                null
            ),
            // The main water bottle in the game
            React.createElement(
                MainSource,
                {
                    ref: this.WaterBottle,
                    className: 'bottle_move',
                    name: "Water Bottle",
                    incrementor: this.WaterBottleMultiplier
                },
                null
            )
        );
    }
}

export default MainGame