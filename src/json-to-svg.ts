
import { svgIcon } from "jao-icons"

interface jsonToSvgOptions {
    pixelSize: number
    pixelPadding: number
}

const jsonToSvg = (
    jsonArray: Array<Array<0 | 1>>,
    opts = {
        pixelSize: 10,
        pixelPadding: 2
    } as jsonToSvgOptions
) : svgIcon => {
    if (!opts) {
        opts = {
            pixelSize: 10,
            pixelPadding: 2
        }
    }

    if (!opts?.pixelSize) {
        opts.pixelSize = 10
    }
    if (!opts?.pixelPadding) {
        opts.pixelPadding = 2
    }

    const width = jsonArray[0].length
    const height = jsonArray.length

    const svg = document.createElement("svg") as svgIcon
    svg.className = "jao-icon"
    svg.setAttribute("version", "1.1")
    svg.setAttribute("viewBox", `0 0 ${width * opts.pixelSize} ${height * opts.pixelSize}`)
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    
    jsonArray.forEach((row, y) => {
        row.forEach((val,x) => {
            const rect = document.createElement("rect")
            rect.className = "jao-icon-cell"
            rect.setAttribute("v", val.toString())
            rect.setAttribute("x", (x * opts.pixelSize + opts.pixelPadding/2).toString())
            rect.setAttribute("y", (y * opts.pixelSize + opts.pixelPadding /2).toString())
            rect.setAttribute("width", (opts.pixelSize - opts.pixelPadding).toString())
            rect.setAttribute("height", (opts.pixelSize - opts.pixelPadding).toString())
            svg.appendChild(rect)
        })
    })
    return svg
}

export { jsonToSvg }
export default jsonToSvg