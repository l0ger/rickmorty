import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {width: '100%', height: 1, backgroundColor: '#c6c6c6'},
});

export default Separator;
