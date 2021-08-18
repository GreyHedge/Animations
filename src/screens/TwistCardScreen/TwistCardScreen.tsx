import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from 'react-native';
import {Swipable, TwistCard} from '@components';
import {EmptyList} from './EmptyList';
import {EScreens, RootStackScreenProps} from '@navigation';
import {
  IWord,
  MAX_SWIPABLE_TWIST_CARD_TRANSLATE_Y,
  SWIPE_UP_TWIST_CARD_BREAKPOINT_Y,
  WORDS,
} from '@constants';

const keyExtractor = (item: IWord) => item.name;

export const TwistCardScreen: React.FC<
  RootStackScreenProps<EScreens.TWIST_CARD_SCREEN>
> = () => {
  const [words, setWords] = useState(WORDS);

  const renderItem = useCallback((info: ListRenderItemInfo<IWord>) => {
    const {name, translate} = info.item;
    const handleSwipeComplete = () => {
      setWords(prev => prev.filter(word => name !== word.name));
    };
    return (
      <Swipable
        onSwipeComplete={handleSwipeComplete}
        swipeTo={MAX_SWIPABLE_TWIST_CARD_TRANSLATE_Y}
        breakPoint={SWIPE_UP_TWIST_CARD_BREAKPOINT_Y}>
        <TwistCard text={name} translate={translate} />
      </Swipable>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={words}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ListEmptyComponent={EmptyList}
      />
      <Text style={styles.text}>Swipe up to delete card from the list</Text>
      <Text style={styles.text}>Cards left: {words.length}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
