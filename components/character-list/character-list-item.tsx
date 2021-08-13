import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {CharacterEntity} from '../../entities/character.entity';

export interface UserListItemProps {
  user: CharacterEntity;
  onPress: (id: number) => boolean;
}
const CharacterListItem = ({user, onPress}: UserListItemProps) => {
  const {id, name, image} = user;
  return (
    <TouchableNativeFeedback onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.userImage} />
        <Text style={styles.userInfo}>{`${name}`}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 60,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  userInfo: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 10,
  },
});

export default CharacterListItem;
