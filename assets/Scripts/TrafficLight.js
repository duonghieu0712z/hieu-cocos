cc.Class({
    extends: cc.Component,

    properties: {
        lights: [cc.Node],

        _currentLight: cc.Node,
        _index: 0,
    },

    start() {
        this._currentLight = this.lights[this._index].getComponent("Light");
        this._currentLight.light();
    },
});
