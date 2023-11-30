cc.Class({
    extends: cc.Component,

    properties: {
        direction: cc.Vec2.RIGHT,
        speed: 20,

        isMoving: {
            default: false,
            visible: false,
        },
    },

    update(dt) {
        if (this.isMoving) {
            const normalizeDirection = this.direction.normalize();
            this.node.position = this.node.position.add(
                normalizeDirection.mul(this.speed * dt)
            );
        }
    },
});
