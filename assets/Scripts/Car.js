cc.Class({
    extends: cc.Component,

    properties: {
        speed: 20,

        isMoving: {
            default: false,
            visible: false,
        },
    },

    update(dt) {
        if (this.isMoving) {
            this.node.x += this.speed * dt;
        }
    },
});
