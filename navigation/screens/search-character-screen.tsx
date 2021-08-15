import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScreenProps} from '../../common/types/navigation.types';

const SearchCharacterScreen: FC<ScreenProps<'SearchCharacter'>> = ({route}) => {
  const {searchWord} = route.params || {};

  return (
    <View style={styles.mainView}>
      <Text style={{color: 'black'}}>{searchWord}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
});
export default SearchCharacterScreen;
