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
        this.onTurnOnGreenLight();
        this.onCollider();
    },

    onTurnOnGreenLight() {
        if (this.greenLight.isActive()) {
            this.chicken.run();
            this.car.run();
        }
    },

    onCollider() {
        if (isCollided(this.chicken.node, this.car.node)) {
            this.chicken.die();
        }
    },
});
