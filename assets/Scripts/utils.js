function getBox(node) {
    let { x, y, width, height, scaleX, scaleY, anchorX, anchorY } = node;
    if (scaleX < 0) {
        scaleX = -scaleX;
        anchorX = 1 - anchorX;
    }
    if (scaleY < 0) {
        scaleY = -scaleY;
        anchorY = 1 - anchorY;
    }

    const leftX = x - width * scaleX * anchorX;
    const topY = y + height * scaleY * (1 - anchorY);
    const rightX = x + width * scaleX * (1 - anchorX);
    const bottomY = y - height * scaleY * anchorY;

    return { leftX, topY, rightX, bottomY };
}

function isCollided(node1, node2) {
    const boxNode1 = getBox(node1);
    const boxNode2 = getBox(node2);

    const notOverlap =
        boxNode1.leftX > boxNode2.rightX ||
        boxNode2.leftX > boxNode1.rightX ||
        boxNode1.bottomY > boxNode2.topY ||
        boxNode2.bottomY > boxNode1.topY;
    return !notOverlap;
}

function drawBoxNode(g, node) {
    const { leftX, topY, rightX, bottomY } = getBox(node);
    drawBox(g, leftX, topY, rightX, bottomY);
}

function drawBox(g, leftX, topY, rightX, bottomY) {
    // Draw top-left point
    g.circle(leftX, topY, 3);
    // Draw bottom-right point
    g.rect(rightX - 3, bottomY - 3, 6, 6);

    drawLine(g, leftX, topY, rightX, topY);
    drawLine(g, rightX, topY, rightX, bottomY);
    drawLine(g, rightX, bottomY, leftX, bottomY);
    drawLine(g, leftX, bottomY, leftX, topY);
}

function drawLine(g, x1, y1, x2, y2) {
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
}

module.exports = {
    getBox,
    isCollided,

    drawBoxNode,
};
