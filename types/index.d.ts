//index.d.ts

declare module "jao-icons" {
    // Redefine the types directly
    export type jaoIconJSON = Array<Array<0 | 1>>;
    export type jaoIconSize = "small" | "medium" | "large";

    type IconMapKeys<T> = {
        [K in keyof T]: K extends `char${string}` ? never : K
    }[keyof T]

    export type jaoIconSource = number | {
        [K in jaoIconSize]: `${K}/${IconMapKeys<typeof import("../src/index").iconsMap[K]>}`
    }[jaoIconSize];

    export function jsonToSvg(icon: jaoIconJSON, options: { pixelSize: number; pixelPadding: number }): SVGElement;
}
