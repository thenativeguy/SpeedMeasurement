import { Dimensions } from "react-native"

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PADDING_HORIZONTAL = WIDTH * 0.02;

const FONTS = {
    BOLD: 'RobotoSlab-Bold',
    BLACK:'RobotoSlab-Black'
}

const LOGO = require('../assets/images/logo.png')

const COLORS = {
    RED: '#E64A33',
    BUTTON_COLOR: '#076282',
    BUTTON_BORDER: '#004861',
    GREEN: '#00AC07',
    SKY_BLUE: '#B2ECF8',
}
const BACKGROUND ={
    BACKGROUND_IMG: require('../assets/images/Background.png')
}
const ICONS = {
    USER : require('../assets/images/icons/user.png'),
    EMAIL: require('../assets/images/icons/email.png'),
    PASSWORD: require('../assets/images/icons/password.png'),
    ANIMAL_TRACK: require('../assets/images/icons/animal-track.png'),
    HARE: require('../assets/images/icons/hare1.png'),
    PLAY_BUTTON: require('../assets/images/icons/play-button.png'),
}
const SCOREBOARD_CHARACTERS={
    RABBIT: require('../assets/images/character-rabbit.png'),
    TURTLE: require('../assets/images/character2.png'),
}
export const LAYOUT = {
    FONTS,
    WIDTH,
    HEIGHT,
    COLORS,
    PADDING_HORIZONTAL,
    ICONS,
    SCOREBOARD_CHARACTERS,
    BACKGROUND,
    LOGO
}