import { jaoIconJSON, jaoIconSize, jaoIconSource } from "jao-icons";
declare const iconsMap: {
    small: {
        [key: string]: jaoIconJSON;
    };
    medium: {
        [key: string]: jaoIconJSON;
    };
    large: {
        [key: string]: jaoIconJSON;
    };
};
declare const Icon: (source: jaoIconSource, size?: jaoIconSize) => SVGElement | undefined;
export { Icon, iconsMap };
