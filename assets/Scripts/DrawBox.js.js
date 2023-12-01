const { drawBoxNode } = require("utils");

cc.Class({
    extends: cc.Component,

    properties: {
        graphic: cc.Graphics,
        chicken: cc.Node,
        car: cc.Node,
    },

    update(dt) {
        this.graphic.clear();

        this.graphic.strokeColor = cc.Color.RED;
        drawBoxNode(this.graphic, this.chicken);
        this.graphic.stroke();

        this.graphic.strokeColor = cc.Color.BLUE;
        drawBoxNode(this.graphic, this.car);
        this.graphic.stroke();
    },
});
