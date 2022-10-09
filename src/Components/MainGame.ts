import React, { Component } from "react";

import '../CSS/Helper.css';
import '../CSS/Style.css';
import '../CSS/Logos.css';

import MainText from "./MainText";
import MainSource from "./MainSource";
import UpgradeGlass from "./UpgradeGlass";

class MainGame extends Component<{}, {}> {
    WaterBottle: React.RefObject<MainSource>;

    WaterBottleMultiplier: number;

    WaterBottleQuantity: number;

    constructor(props?: any) {
        super(props);
        this.WaterBottle = React.createRef();

        this.WaterBottleMultiplier = 1;
        this.WaterBottleQuantity = 0;

        this.updateWaterBottleMultiplier = this.updateWaterBottleMultiplier.bind(this);
        this.getWaterBottleQuantity = this.getWaterBottleQuantity.bind(this);
    }

    updateWaterBottleMultiplier(magnitude: number) {
        this.WaterBottleMultiplier *= magnitude;
        this.WaterBottle.current?.updateIncrementor(magnitude);
    }

    // Get the value of how many bottles have been harvested.
    getWaterBottleQuantity() {
        if (this.WaterBottle.current?.state.amount != null) {
            this.WaterBottleQuantity = this.WaterBottle.current.state.amount;
        } else {
            this.WaterBottleQuantity = 0;
        }
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
                    incrementor: this.WaterBottleMultiplier,
                    retriever: this.getWaterBottleQuantity
                },
                null
            ),
            React.createElement(
                UpgradeGlass,
                null,
                null
            ),
            React.createElement(
                UpgradeGlass,
                null,
                null
            ),
            React.createElement(
                UpgradeGlass,
                null,
                null
            )
        );
    }
}

export default MainGame