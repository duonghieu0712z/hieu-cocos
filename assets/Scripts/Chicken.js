cc.Class({
    extends: cc.Component,

    properties: {
        direction: cc.Vec2,
        speed: 20,

        anim: cc.Animation,
        car: cc.Node,

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

    playRun() {
        if (!this.isMoving) {
            this.anim.play("chicken-run");
            this.isMoving = true;
        }
    },

    stopRun() {
        this.anim.stop("chicken-run");
        this.isMoving = false;
    },
});
