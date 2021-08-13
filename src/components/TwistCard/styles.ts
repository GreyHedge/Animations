import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: 200,
    borderRadius: 16,
    textShadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.3,
    shadowColor: 'black',
    shadowRadius: 3,
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
