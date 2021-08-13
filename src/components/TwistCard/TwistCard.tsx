import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {CardSide} from './CardSide';
import {useTwistCard} from './useTwistCard';
import {styles} from './styles';
import {BACK_CARD_COLOR, FRONT_CARD_COLOR} from './constants';

interface IProps {
  text: string;
  translate: string;
  frontCardColor?: string;
  backCardColor?: string;
}

export const TwistCard: React.FC<IProps> = ({
  text,
  translate,
  frontCardColor = FRONT_CARD_COLOR,
  backCardColor = BACK_CARD_COLOR,
}) => {
  const {
    animatedCardStyle,
    animatedTextStyle,
    animatedTranslateStyle,
    handleCardPress,
  } = useTwistCard(frontCardColor, backCardColor);

  return (
    <TouchableWithoutFeedback onPress={handleCardPress}>
      <Animated.View style={[styles.card, animatedCardStyle]}>
        <CardSide text={text} style={animatedTextStyle} />
        <CardSide text={translate} style={animatedTranslateStyle} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
