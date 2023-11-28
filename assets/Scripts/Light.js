cc.Class({
    extends: cc.Component,

    properties: {
        defaultColor: cc.Color.GRAY,
        color: cc.Color.WHITE,

        lightDuration: 1,
        flashDuration: 0.2,
        flashRepeat: 3,

        isComplete: false,

        _isLight: false,
    },

    onLoad() {
        this.turnOff();
    },

    turnOn() {
        this.node.color = this.color;
        this._isLight = true;
    },

    turnOff() {
        this.node.color = this.defaultColor;
        this._isLight = false;
    },

    switchLight() {
        if (this._isLight) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    },

    flash() {
        this.schedule(
            () => {
                this.switchLight();
            },
            this.flashDuration,
            this.flashRepeat * 2
        );
    },

    light() {
        this.turnOn();
        this.scheduleOnce(() => {
            this.flash();
        }, this.lightDuration);
    },
});
