import React, {PropsWithChildren, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SCALE_ANIMATION_CONFIG} from '../constants';

export const Scalable: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const scale = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    scale.value = withSpring(1, SCALE_ANIMATION_CONFIG);
  }, []);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
