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

module.exports = {
    getBox,
    isCollided,
};
