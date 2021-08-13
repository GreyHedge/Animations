import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TwistCard} from '../components';
import faker from 'faker';
import {EScreens, RootStackScreenProps} from '../navigation';

export const TwistCardScreen: React.FC<
  RootStackScreenProps<EScreens.TWIST_CARD_SCREEN>
> = () => {
  return (
    <View style={styles.container}>
      <TwistCard text={faker.lorem.word()} translate={faker.lorem.word()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
