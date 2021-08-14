import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {CharacterList} from '../components/character/character-list';

const HomeScreen: FC = () => {
  return (
    <View style={styles.mainView}>
      <CharacterList />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
});
export default HomeScreen;
