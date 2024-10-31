const jsonToSvg = (jsonArray, opts = {
    pixelSize: 10,
    pixelPadding: 2
}) => {
    if (!opts) {
        opts = {
            pixelSize: 10,
            pixelPadding: 2
        };
    }
    if (!opts?.pixelSize) {
        opts.pixelSize = 10;
    }
    if (!opts?.pixelPadding) {
        opts.pixelPadding = 2;
    }
    const width = jsonArray[0].length;
    const height = jsonArray.length;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("viewBox", `0 0 ${width * opts.pixelSize} ${height * opts.pixelSize}`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("class", "jao-icon");
    jsonArray.forEach((row, y) => {
        row.forEach((val, x) => {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("class", "jao-icon-cell");
            rect.setAttribute("v", val.toString());
            rect.setAttribute("x", (x * opts.pixelSize + opts.pixelPadding / 2).toString());
            rect.setAttribute("y", (y * opts.pixelSize + opts.pixelPadding / 2).toString());
            rect.setAttribute("width", (opts.pixelSize - opts.pixelPadding).toString());
            rect.setAttribute("height", (opts.pixelSize - opts.pixelPadding).toString());
            svg.appendChild(rect);
        });
    });
    return svg;
};
export { jsonToSvg };
export default jsonToSvg;
