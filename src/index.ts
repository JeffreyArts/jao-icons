import { jaoIconJSON, jaoIconSize, jaoIconSource, svgIcon } from "jao-icons"
import jsonToSvg from "./json-to-svg"

// Small
import smallNumbers0 from "../icons/small/numbers/0.json"
import smallNumbers1 from "../icons/small/numbers/1.json"
import smallNumbers2 from "../icons/small/numbers/2.json"
import smallNumbers3 from "../icons/small/numbers/3.json"
import smallNumbers4 from "../icons/small/numbers/4.json"
import smallNumbers5 from "../icons/small/numbers/5.json"
import smallNumbers6 from "../icons/small/numbers/6.json"
import smallNumbers7 from "../icons/small/numbers/7.json"
import smallNumbers8 from "../icons/small/numbers/8.json"
import smallNumbers9 from "../icons/small/numbers/9.json"
import smallCircle from "../icons/small/circle.json"
import smallCross from "../icons/small/cross.json"
import smallEmpty from "../icons/small/empty.json"
import smallExpand from "../icons/small/expand.json"
import smallFullscreen from "../icons/small/fullscreen.json"
import smallHeartOutline from "../icons/small/heart-outline.json"
import smallHeart from "../icons/small/heart.json"
import smallPlay from "../icons/small/play.json"
import smallSquare from "../icons/small/square.json"

// Medium
import mediumNumber0 from "../icons/medium/numbers/0.json"
import mediumNumber1 from "../icons/medium/numbers/1.json"
import mediumNumber2 from "../icons/medium/numbers/2.json"
import mediumNumber3 from "../icons/medium/numbers/3.json"
import mediumNumber4 from "../icons/medium/numbers/4.json"
import mediumNumber5 from "../icons/medium/numbers/5.json"
import mediumNumber6 from "../icons/medium/numbers/6.json"
import mediumNumber7 from "../icons/medium/numbers/7.json"
import mediumNumber8 from "../icons/medium/numbers/8.json"
import mediumNumber9 from "../icons/medium/numbers/9.json"
import mediumCheckboxChecked from "../icons/medium/checkbox-check.json"
import mediumCheckboxCross from "../icons/medium/checkbox-cross.json"
import mediumCheckbox from "../icons/medium/checkbox-empty.json"
import mediumChristmasTree from "../icons/medium/christmas-tree.json"
import mediumCircle from "../icons/medium/circle.json"
import mediumComment from "../icons/medium/comment.json"
import mediumCross from "../icons/medium/cross.json"
import mediumEmpty from "../icons/medium/empty.json"
import mediumEuro from "../icons/medium/euro.json"
import mediumExpandWithBorder from "../icons/medium/expand-w-border.json"
import mediumExpand from "../icons/medium/expand.json"
import mediumEye from "../icons/medium/eye.json"
import mediumFullscreen from "../icons/medium/fullscreen.json"
import mediumHeartOutline from "../icons/medium/heart-outline.json"
import mediumHeart from "../icons/medium/heart.json"
import mediumLogo from "../icons/medium/logo.json"
import mediumMove from "../icons/medium/move.json"
import mediumOff from "../icons/medium/off.json"
import mediumOn from "../icons/medium/on.json"
import mediumPlay from "../icons/medium/play.json"
import mediumPlus from "../icons/medium/plus.json"
import mediumQuestion from "../icons/medium/question.json"
import mediumSmiley from "../icons/medium/smiley.json"
import mediumTerminal from "../icons/medium/terminal.json"


// Large
import largeNumber0 from "../icons/large/numbers/0.json"
import largeNumber1 from "../icons/large/numbers/1.json"
import largeNumber2 from "../icons/large/numbers/2.json"
import largeNumber3 from "../icons/large/numbers/3.json"
import largeNumber4 from "../icons/large/numbers/4.json"
import largeNumber5 from "../icons/large/numbers/5.json"
import largeNumber6 from "../icons/large/numbers/6.json"
import largeNumber7 from "../icons/large/numbers/7.json"
import largeNumber8 from "../icons/large/numbers/8.json"
import largeNumber9 from "../icons/large/numbers/9.json"
import largeArchive from "../icons/large/archive.json"
import largeCircle from "../icons/large/circle.json"
import largecross from "../icons/large/cross.json"
import largeEmpty from "../icons/large/empty.json"
import largeEuro from "../icons/large/euro.json"
import largeHamburger from "../icons/large/hamburger.json"
import largeHammer from "../icons/large/hammer.json"
import largeImage from "../icons/large/image.json"
import largeIsoCube from "../icons/large/iso-cube.json"
import largeLeave from "../icons/large/leave.json"
import largeMove from "../icons/large/move.json"
import largeQuestion from "../icons/large/question.json"
import largeSpeechBubble from "../icons/large/speech-bubble.json"
import largeThoughts from "../icons/large/thoughts.json"
import largeWrench from "../icons/large/wrench.json"

export const iconsMap = {
    small: {
        "number0": smallNumbers0,
        "number1": smallNumbers1,
        "number2": smallNumbers2,
        "number3": smallNumbers3,
        "number4": smallNumbers4,
        "number5": smallNumbers5,
        "number6": smallNumbers6,
        "number7": smallNumbers7,
        "number8": smallNumbers8,
        "number9": smallNumbers9,
        "circle": smallCircle,
        "cross": smallCross,
        "empty": smallEmpty,
        "expand": smallExpand,
        "fullscreen": smallFullscreen,
        "heart-outline": smallHeartOutline,
        "heart": smallHeart,
        "play": smallPlay,
        "square": smallSquare,
    },
    medium: {
        "number0": mediumNumber0,
        "number1": mediumNumber1,
        "number2": mediumNumber2,
        "number3": mediumNumber3,
        "number4": mediumNumber4,
        "number5": mediumNumber5,
        "number6": mediumNumber6,
        "number7": mediumNumber7,
        "number8": mediumNumber8,
        "number9": mediumNumber9,
        "checkbox-checked": mediumCheckboxChecked,
        "checkbox-cross": mediumCheckboxCross,
        "checkbox": mediumCheckbox,
        "christmas-tree": mediumChristmasTree,
        "circle": mediumCircle,
        "comment": mediumComment,
        "cross": mediumCross,
        "empty": mediumEmpty,
        "euro": mediumEuro,
        "expand-with-border": mediumExpandWithBorder,
        "expand": mediumExpand,
        "eye": mediumEye,
        "fullscreen": mediumFullscreen,
        "heart-outline": mediumHeartOutline,
        "heart": mediumHeart,
        "logo": mediumLogo,
        "move": mediumMove,
        "off": mediumOff,
        "on": mediumOn,
        "play": mediumPlay,
        "plus": mediumPlus,
        "question": mediumQuestion,
        "smiley": mediumSmiley,
        "terminal": mediumTerminal,
    },
    large: { 
        "number0": largeNumber0,
        "number1": largeNumber1,
        "number2": largeNumber2,
        "number3": largeNumber3,
        "number4": largeNumber4,
        "number5": largeNumber5,
        "number6": largeNumber6,
        "number7": largeNumber7,
        "number8": largeNumber8,
        "number9": largeNumber9,
        "archive": largeArchive,
        "circle": largeCircle,
        "cross": largecross,
        "empty": largeEmpty,
        "euro": largeEuro,
        "hamburger": largeHamburger,
        "hammer": largeHammer,
        "image": largeImage,
        "iso-cube": largeIsoCube,
        "leave": largeLeave,
        "move": largeMove,
        "question": largeQuestion,
        "speech-bubble": largeSpeechBubble,
        "thoughts": largeThoughts,
        "wrench": largeWrench,
    }
} as {
    small: {[key:string] : jaoIconJSON},
    medium: {[key:string] : jaoIconJSON},
    large: {[key:string] : jaoIconJSON},
}


const Icon = (source: jaoIconSource, size?: jaoIconSize) : svgIcon | undefined => {
    if (typeof source === "string") {
        const size = source.split("/")[0] as jaoIconSize
        const name = source.split("/")[1] as string
        if (size && name) {
            const icon = iconsMap[size][name]

            if (!icon) {
                throw new Error(`Icon ${source} does not exist`)
            }
            
            return jsonToSvg(icon, {
                pixelSize: 8,
                pixelPadding: 2
            })
        }

        throw new Error(`Icon ${source} does not exist`)
    }

    if (typeof source === "number") {
        const numbers = source.toString().split("").map(int => {
            if (!size) {
                size = "medium"
            }
            return iconsMap[size][`number${int}`]
        }) 
        
        const result = [] as jaoIconJSON
        
        numbers.forEach((number, numberIndex) => {
            numbers[numberIndex].forEach((row, rowIndex) => {
                if (!result[rowIndex]) {
                    result.push([0])
                }
                result[rowIndex] = result[rowIndex].concat(row, [0])
            })
        })

        return jsonToSvg(result, {
            pixelSize: 8,
            pixelPadding: 2
        })
    }
}


export { Icon }
export default Icon