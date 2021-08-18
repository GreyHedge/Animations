import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '@constants';
import {EScreens, RootStackNavigationProp} from '@navigation';
import {Scalable} from '@components';

const {width} = Dimensions.get('window');

export const EmptyList = () => {
  const {goBack} =
    useNavigation<RootStackNavigationProp<EScreens.TWIST_CARD_SCREEN>>();

  return (
    <View style={styles.container}>
      <Scalable>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.text}>It's done!</Text>
        </TouchableOpacity>
      </Scalable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    ...commonStyles.shadow,
    backgroundColor: '#2A1E5C',
    padding: 16,
    borderRadius: 8,
    width: 110,
  },
  text: {
    color: '#C4CBCA',
    fontSize: 18,
  },
});
