cc.Class({
    extends: cc.Component,

    properties: {},

    light(isLight) {
        cc.log(isLight ? "light turn on" : "light turn off");
    },
});
