import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export enum EScreensTitle {
  MAIN_SCREEN = 'Overview',
  FLATLIST_SCROLL_ANIMATION_SCREEN = 'FlatListScrollAnimation',
  TWIST_CARD_SCREEN = 'TwistCardScreen',
}

export enum EScreens {
  MAIN_SCREEN = 'MainScreen',
  FLATLIST_SCROLL_ANIMATION_SCREEN = `FlatListScrollAnimationScreen`,
  TWIST_CARD_SCREEN = 'TwistCardScreen',
}

export type RootStackParamList = {
  [EScreens.MAIN_SCREEN]: undefined;
  [EScreens.FLATLIST_SCROLL_ANIMATION_SCREEN]: undefined;
  [EScreens.TWIST_CARD_SCREEN]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
