import {StyleSheet, Dimensions} from 'react-native';
import {commonStyles, TWIST_CARD_HEIGHT} from '@constants';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    ...commonStyles.shadow,
    width: width * 0.8,
    height: TWIST_CARD_HEIGHT,
    borderRadius: 16,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
