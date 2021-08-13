import React from 'react';
import {ViewStyle, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {styles} from './styles';

interface IProps {
  text: string;
  style: ViewStyle;
}

export const CardSide: React.FC<IProps> = ({text, style}) => {
  return (
    <Animated.View style={[styles.textContainer, style]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};
