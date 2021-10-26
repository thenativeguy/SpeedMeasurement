import { Dimensions } from "react-native"

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const FONTS = {
    BOLD: 'RobotoSlab-Bold',
    BLACK:'RobotoSlab-Black'
}

const COLORS = {
    RED: '#E64A33',
    BUTTON_COLOR: '#076282',
    BUTTON_BORDER: '#004861',
    GREEN: '#00AC07',
    SKY_BLUE: '#B2ECF8',
}
export const LAYOUT = {
    FONTS,
    WIDTH,
    HEIGHT,
    COLORS,
}