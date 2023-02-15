import { GlobalVars } from "../const";

export const defaultTheme = {
    colors: {
        primary: "gray",
        secondary: "black",
    },
    media: {
        phone: `(max-width: ${GlobalVars.tablet}px)`,
        tablet: `(max-width: ${GlobalVars.desktop}px) and (min-width: ${GlobalVars.tablet}px)`,
        desktop: `(min-width: ${GlobalVars.desktop}px)`,
    },
};