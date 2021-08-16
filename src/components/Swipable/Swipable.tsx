import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useSwipe} from './useSwipe';

export interface ISwipeProps {
  onSwipeComplete: () => void;
  swipeTo: number;
  breakPoint: number;
}

export const Swipable: React.FC<PropsWithChildren<ISwipeProps>> = ({
  children,
  swipeTo,
  breakPoint,
  onSwipeComplete,
}) => {
  const {animatedWrapperStyle, animatedCardStyle, panGesureEvent} = useSwipe({
    swipeTo,
    breakPoint,
    onSwipeComplete,
  });
  return (
    <Animated.View style={[styles.cardWrapper, animatedWrapperStyle]}>
      <PanGestureHandler onGestureEvent={panGesureEvent}>
        <Animated.View style={animatedCardStyle}>{children}</Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
