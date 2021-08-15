import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export interface ProfileAvatarProps {
  uri: string;
}
const Avatar: FC<ProfileAvatarProps> = ({uri}: ProfileAvatarProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 50,
  },
});
export default Avatar;
