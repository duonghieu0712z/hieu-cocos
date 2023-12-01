cc.Class({
    extends: cc.Component,

    properties: {
        direction: cc.Vec2,
        speed: 20,

        anim: cc.Animation,

        _isMoving: false,
        _isDied: false,
    },

    update(dt) {
        if (!this._isDied && this._isMoving) {
            this.move(dt);
        }
    },

    move(dt) {
        const normalizeDirection = this.direction.normalize();
        this.node.position = this.node.position.add(
            normalizeDirection.mul(this.speed * dt)
        );
    },

    die() {
        this.stop();

        this.node.color = cc.Color.BLACK;
        this._isDied = true;
    },

    run() {
        if (!this._isMoving) {
            this.anim.play("chicken-run");
            this._isMoving = true;
        }
    },

    stop() {
        this.anim.stop("chicken-run");
        this._isMoving = false;
    },
});
