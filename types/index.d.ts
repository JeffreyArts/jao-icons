//index.d.ts

declare module "jao-icons" {
    // Redefine the types directly
    export type jaoIconJSON = Array<Array<0 | 1>>;
    export type jaoIconSize = "small" | "medium" | "large";
    export type svgIcon = HTMLElement & SVGElement;

    export type jaoIconSource = number |
        "medium/checkbox-check" |
        "medium/checkbox-cross" |
        "medium/checkbox-empty" |
        "medium/christmas-tree" |
        "medium/circle" |
        "medium/cross" |
        "medium/expand-w-border" |
        "medium/expand" |
        "medium/eye" |
        "medium/heart-outline" |
        "medium/heart" |
        "medium/off" |
        "medium/on" |
        "medium/smiley-face" |
        "medium/terminal.json" |
        "large/circle" |
        "large/cross" |
        "large/empty" |
        "large/hamburger" |
        "large/leave" |
        "large/speech-bubble" |
        "large/wrench";

    export function jsonToSvg(icon: jaoIconJSON, options: { pixelSize: number; pixelPadding: number }): svgIcon;
}
