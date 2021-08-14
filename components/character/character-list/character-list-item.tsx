import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {CharacterEntity} from '../../../entities/character.entity';

export interface UserListItemProps {
  character: CharacterEntity;
  onPress: (name: string) => boolean;
}
const CharacterListItem = ({character, onPress}: UserListItemProps) => {
  const {name, image} = character;

  return (
    <TouchableNativeFeedback onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.info}>{`${name}`}</Text>
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
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  info: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 10,
  },
});

export default CharacterListItem;
