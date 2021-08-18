import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {EScreens, EScreensTitle, RootStackScreenProps} from '@navigation';

export const MainScreen: React.FC<RootStackScreenProps<EScreens.MAIN_SCREEN>> =
  ({navigation}) => {
    const handleFlatListScrollAnimationPress = useCallback(() => {
      navigation.navigate(EScreens.FLATLIST_SCROLL_ANIMATION_SCREEN);
    }, [navigation]);

    const handleTwistCardPress = useCallback(() => {
      navigation.navigate(EScreens.TWIST_CARD_SCREEN);
    }, [navigation]);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFlatListScrollAnimationPress}>
          <Text style={styles.text}>
            {EScreensTitle.FLATLIST_SCROLL_ANIMATION_SCREEN}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTwistCardPress}>
          <Text style={styles.text}>{EScreensTitle.TWIST_CARD_SCREEN}</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  button: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    color: '#33b3b2',
    fontSize: 18,
    fontWeight: '700',
  },
});
