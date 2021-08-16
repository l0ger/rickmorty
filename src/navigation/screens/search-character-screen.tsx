import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScreenProps} from '../../common/types/navigation.type';
import {CharacterList} from '../../components/character/character-list';

const SearchCharacterScreen: FC<ScreenProps<'SearchCharacter'>> = ({route}) => {
  const {searchWord} = route.params || {};
  const filter = {name: searchWord}; //searchWord ? {name: searchWord} : undefined;
  return (
    <View style={styles.mainView}>
      <CharacterList filter={filter} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
});
export default SearchCharacterScreen;
