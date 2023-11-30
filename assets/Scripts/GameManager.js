const Car = require("Car");
const Chicken = require("Chicken");
const Light = require("Light");

const { isCollided } = require("utils");

cc.Class({
    extends: cc.Component,

    properties: {
        greenLight: Light,
        car: Car,
        chicken: Chicken,
    },

    update(dt) {
        if (this.greenLight.isLighting) {
            this.chicken.playRun();
            this.car.isMoving = true;
        }

        if (isCollided(this.chicken.node, this.car.node)) {
            this.chicken.stopRun();
        }
    },
});
