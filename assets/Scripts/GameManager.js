const Car = require("Car");
const Chicken = require("Chicken");
const Light = require("Light");

cc.Class({
    extends: cc.Component,

    properties: {
        greenLight: Light,
        car: Car,
        chicken: Chicken,
    },

    update(dt) {
        if (this.greenLight.isLight) {
            this.playChickenRun();
            this.playCarRun();
        }
    },

    playChickenRun() {
        if (!this.chicken.isMoving) {
            this.chicken.playRun();
        }
    },

    playCarRun() {
            this.car.isMoving = true;
    },
});
