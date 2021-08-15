import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScreenProps} from '../../common/types/navigation.type';
import {CharacterList} from '../../components/character/character-list';

const SearchCharacterScreen: FC<ScreenProps<'SearchCharacter'>> = ({route}) => {
  const {searchWord} = route.params || {};

  return (
    <View style={styles.mainView}>
      <CharacterList filter={{name: searchWord}} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
});
export default SearchCharacterScreen;
