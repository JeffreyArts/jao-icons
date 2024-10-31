interface jsonToSvgOptions {
    pixelSize: number;
    pixelPadding: number;
}
declare const jsonToSvg: (jsonArray: Array<Array<0 | 1>>, opts?: jsonToSvgOptions) => SVGElement;
export { jsonToSvg };
export default jsonToSvg;
