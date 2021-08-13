import {useCallback} from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {END_CARD_ANGLE, INPUT_RANGE, START_CARD_ANGLE} from './constants';

export const useTwistCard = (frontCardColor: string, backCardColor: string) => {
  const cardAngle = useSharedValue(START_CARD_ANGLE);
  const animatedCardStyle = useAnimatedStyle(() => {
    const color = interpolateColor(cardAngle.value, INPUT_RANGE, [
      frontCardColor,
      backCardColor,
      backCardColor,
    ]);
    return {
      backgroundColor: color,
      transform: [{rotateY: `${cardAngle.value}rad`}],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(cardAngle.value, INPUT_RANGE, [1, 0, 0]);
    return {
      opacity,
    };
  });

  const animatedTranslateStyle = useAnimatedStyle(() => {
    const opacity = interpolate(cardAngle.value, INPUT_RANGE, [0, 0, 1]);
    return {
      opacity,
      transform: [{rotateY: `${END_CARD_ANGLE}rad`}],
    };
  });

  const handleCardPress = useCallback(() => {
    const angle =
      cardAngle.value === START_CARD_ANGLE ? END_CARD_ANGLE : START_CARD_ANGLE;
    cardAngle.value = withTiming(angle);
  }, []);

  return {
    animatedCardStyle,
    animatedTextStyle,
    animatedTranslateStyle,
    handleCardPress,
  };
};
