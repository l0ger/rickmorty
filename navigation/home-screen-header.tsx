import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme.constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {StackHeaderProps} from '@react-navigation/stack';

const HomeScreenHeader: FC<StackHeaderProps> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('SearchCharacter');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>RickMorty</Text>
      <TouchableOpacity onPress={onPressHandler}>
        <FontAwesomeIcon
          name={'search'}
          size={15}
          color={'white'}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
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
export default HomeScreenHeader;
