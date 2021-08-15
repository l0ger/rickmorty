import React, {FC} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/theme.constants';
import {SearchInput} from '../common/components/search-input';
import {StackHeaderTitleProps} from '@react-navigation/stack';

const SearchCharacterHeaderTitle: FC<StackHeaderTitleProps> = () => {
  const window = useWindowDimensions();
  const navigation = useNavigation();

  const onChangeText = (searchWord: string) => {
    if (searchWord) {
      navigation.setParams({searchWord: searchWord});
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput
        onChangeText={onChangeText}
        placeholder={'Search character name'}
        containerStyle={{width: window.width - 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.themMain,
    height: 50,
  },
  headerTitle: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconStyle: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});
export default SearchCharacterHeaderTitle;
