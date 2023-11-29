const Light = require("Light");

cc.Class({
    extends: cc.Component,

    properties: {
        lights: [Light],

        _currentLight: Light,
        _index: 0,
    },

    start() {
        this.turnOnCurrentLight();
    },

    update(dt) {
        if (!this._currentLight) {
            return;
        }

        this._currentLight.light(dt);
        this._currentLight.flash(dt);

        this.nextLight();
    },

    nextLight() {
        if (this._currentLight.isCompleted) {
            this._index++;
            if (this._index === this.lights.length) {
                this._currentLight = null;
                return;
            }

            this.turnOnCurrentLight();
        }
    },

    turnOnCurrentLight() {
        this._currentLight = this.lights[this._index];
        this._currentLight.turnOn();
    },
});
