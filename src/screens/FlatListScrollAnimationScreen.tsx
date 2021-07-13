import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  Animated,
  Dimensions,
} from 'react-native';
import faker from 'faker';
import {EScreens, RootStackScreenProps} from '../navigation';

const {width} = Dimensions.get('window');

const AVATAR_SIZE = 70;
const SPASING = 16;
const CARD_HEIGHT = AVATAR_SIZE + SPASING * 3;

interface IDataItem {
  key: string;
  image: string;
  name: string;
  jobTitle: string;
  email: string;
}

faker.seed(10);
const DATA = [...Array(20)].map(() => {
  return {
    key: faker.datatype.uuid(),
    image: faker.image.avatar(),
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const keyExtractor = (item: IDataItem) => item.key;

export const FlatListScrollAnimationScreen: React.FC<
  RootStackScreenProps<EScreens.FLATLIST_SCROLL_ANIMATION_SCREEN>
> = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = (info: ListRenderItemInfo<IDataItem>) => {
    const {index, item} = info;
    const {image, name, jobTitle, email} = item;
    const interpolatedValue = scrollY.interpolate({
      inputRange: [-1, CARD_HEIGHT * index, CARD_HEIGHT * (index + 2)],
      outputRange: [1, 1, 0],
    });
    const translateX = scrollY.interpolate({
      inputRange: [-1, CARD_HEIGHT * index, CARD_HEIGHT * (index + 1)],
      outputRange: [0, 0, -width],
    });

    return (
      <Animated.View
        style={[
          styles.card,
          {
            opacity: interpolatedValue,
            transform: [{translateX}, {scale: interpolatedValue}],
          },
        ]}>
        <Image source={{uri: image}} style={styles.img} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.textBold]}>{name}</Text>
          <Text style={styles.text}>{jobTitle}</Text>
          <Text style={[styles.text, styles.textGreen]}>{email}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/doughnuts.jpg')}
      style={StyleSheet.absoluteFillObject}
      blurRadius={5}>
      <Animated.FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPASING,
  },
  card: {
    flexDirection: 'row',
    padding: SPASING,
    backgroundColor: 'rgba(256, 256, 256, 0.8)',
    borderRadius: 16,
    marginBottom: SPASING,
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 0.3,
  },
  img: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: SPASING,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  textBold: {
    fontWeight: '700',
  },
  textGreen: {
    color: '#33b3b2',
  },
});
