import {Dimensions} from 'react-native';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  interpolate,
  Extrapolate,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import {SWIPE_ANIMATION_CONFIG} from '@constants';
import {ISwipeProps} from './Swipable';

const {width} = Dimensions.get('window');
const START_POINT = 0;

export const useSwipe = ({
  swipeTo,
  breakPoint,
  onSwipeComplete,
}: ISwipeProps) => {
  const translateY = useSharedValue(START_POINT);
  const wrapperWidth = useSharedValue(width);

  const animatedWrapperStyle = useAnimatedStyle(() => {
    return {
      width: wrapperWidth.value,
    };
  });

  const animatedCardStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, swipeTo],
      [1, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{translateY: translateY.value}],
    };
  });

  const panGesureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: event => {
        if (event.translationY > 0) {
          return;
        }
        translateY.value = event.translationY;
      },
      onEnd: event => {
        if (event.translationY <= breakPoint) {
          translateY.value = withTiming(swipeTo, SWIPE_ANIMATION_CONFIG);
          wrapperWidth.value = withDelay(
            100,
            withTiming(0, SWIPE_ANIMATION_CONFIG, (isFinished: boolean) => {
              isFinished && runOnJS(onSwipeComplete)();
            }),
          );
        } else {
          translateY.value = START_POINT;
        }
      },
    });

  return {
    animatedWrapperStyle,
    animatedCardStyle,
    panGesureEvent,
  };
};
