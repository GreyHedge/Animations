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
    const elevation = interpolate(
      cardAngle.value,
      [
        START_CARD_ANGLE,
        START_CARD_ANGLE + 0.05,
        END_CARD_ANGLE - 0.05,
        END_CARD_ANGLE,
      ],
      [5, 0, 0, 5],
    );
    return {
      elevation,
      backgroundColor: color,
      transform: [{rotateY: `${cardAngle.value}rad`}],
    };
  });

  const animatedFrontSideStyle = useAnimatedStyle(() => {
    const opacity = interpolate(cardAngle.value, INPUT_RANGE, [1, 0, 0]);
    return {
      opacity,
    };
  });

  const animatedBackSideStyle = useAnimatedStyle(() => {
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
    animatedFrontSideStyle,
    animatedBackSideStyle,
    handleCardPress,
  };
};
