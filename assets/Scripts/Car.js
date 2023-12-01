cc.Class({
    extends: cc.Component,

    properties: {
        direction: cc.Vec2.RIGHT,
        speed: 20,

        _isMoving: false,
    },

    update(dt) {
        if (this._isMoving) {
            this.move(dt);
        }
    },

    move(dt) {
        const normalizeDirection = this.direction.normalize();
        this.node.position = this.node.position.add(
            normalizeDirection.mul(this.speed * dt)
        );
    },

    run() {
        this._isMoving = true;
    },

    stop() {
        this._isMoving = false;
    },
});
