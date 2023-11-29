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
            const normalDirect = this.direction.normalize();
            this.node.position = this.node.position.add(
                normalDirect.mul(this.speed * dt)
            );

            this.onCarAccident();
        }
    },

    playRun() {
        this.anim.play("chicken-run");
        this.isMoving = true;
    },

    stopRun() {
        this.anim.stop("chicken-run");
        this.isMoving = false;
    },

    onCarAccident() {
        console.log(this.isAccident());
        if (this.isAccident()) {
            this.stopRun();
            this.car.isMoving = false;
            this.node.color = cc.Color.BLACK;
        }
    },

    isAccident() {
        const chickenX1 =
            this.node.x - (this.node.width * this.node.scaleX) / 2;
        const chickenY1 =
            this.node.y + (this.node.height * this.node.scaleY) / 2;
        const chickenX2 =
            this.node.x + (this.node.width * this.node.scaleX) / 2;
        const chickenY2 =
            this.node.y - (this.node.height * this.node.scaleY) / 2;

        const carX1 = this.car.x - (this.car.width * this.car.scaleX) / 2;
        const carY1 = this.car.y + (this.car.height * this.car.scaleY) / 2;
        const carX2 = this.car.x + (this.car.width * this.car.scaleX) / 2;
        const carY2 = this.car.y - (this.car.height * this.car.scaleY) / 2;

        return !(
            chickenX1 > carX2 ||
            carX1 > chickenX2 ||
            chickenY2 > carY1 ||
            carY2 > chickenY1
        );
    },
});
