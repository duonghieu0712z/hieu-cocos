cc.Class({
    extends: cc.Component,

    properties: {
        color: cc.Color.WHITE,

        lightDuration: 1,
        flashDuration: 0.2,
        flashRepeat: 6,

        _isActive: false,
        _isLight: false,
        _isFlash: false,

        _timer: 0,
        _repeatCounter: 0,
    },

    onLoad() {
        this.node.color = this.color;
        this.turnOff();
    },

    update(dt) {
        if (this._isActive) {
            this.light(dt);
            this.flash(dt);
        }
    },

    isActive() {
        return this._isActive;
    },

    active(isActive) {
        if (isActive) {
            this.turnOn();
        }
        this._isActive = isActive;
    },

    turnOn() {
        this.node.opacity = 255;
        this._isLight = true;
    },

    turnOff() {
        this.node.opacity = 63;
        this._isLight = false;
    },

    switchLight() {
        if (this._isLight) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    },

    flash(dt) {
        if (this._isFlash && this._repeatCounter <= this.flashRepeat) {
            this._timer += dt;
            if (this._timer >= this.flashDuration) {
                this.switchLight();

                this._repeatCounter++;
                if (this._repeatCounter > this.flashRepeat) {
                    this._isActive = false;
                }

                this._timer = 0;
            }
        }
    },

    light(dt) {
        this._timer += dt;
        if (this._timer >= this.lightDuration) {
            this._isFlash = true;
            this._timer = 0;
        }
    },
});
