import {Dimensions, StatusBar} from 'react-native';

export const TWIST_CARD_HEIGHT = 200;

const HEADER_HEIGHT = 44;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 0;
const {height} = Dimensions.get('window');

export const MAX_SWIPABLE_TWIST_CARD_TRANSLATE_Y =
  -(height - HEADER_HEIGHT - STATUS_BAR_HEIGHT + TWIST_CARD_HEIGHT) / 2;
export const SWIPE_UP_TWIST_CARD_BREAKPOINT_Y = -100;

export const SWIPE_ANIMATION_CONFIG = {duration: 100};

export const SCALE_ANIMATION_CONFIG = {
  mass: 1,
  damping: 20,
  stiffness: 500,
};
