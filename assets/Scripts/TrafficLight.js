const Light = require("Light");

cc.Class({
    extends: cc.Component,

    properties: {
        lights: [Light],

        _currentLight: Light,
        _index: 0,
    },

    start() {
        this.activeCurrentLight();
    },

    update(dt) {
        if (!this._currentLight) {
            return;
        }
        this.nextLight();
    },

    nextLight() {
        if (!this._currentLight.isActive()) {
            this._index++;
            if (this._index === this.lights.length) {
                this._currentLight = null;
                return;
            }

            this.activeCurrentLight();
        }
    },

    activeCurrentLight() {
        this._currentLight = this.lights[this._index];
        this._currentLight.active(true);
    },
});
