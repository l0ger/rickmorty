import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" color="#f4511e" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {color: 'black', fontSize: 18, marginTop: 15},
});

export default Loading;
