import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorProps,
} from 'react-native';
interface LoadingProps extends ActivityIndicatorProps {
  text?: string;
}
const Loading: FC<LoadingProps> = ({text, size, color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating
        size={size || 'large'}
        color={color || '#f4511e'}
      />
      <Text style={styles.text}>{text || 'Loading...'}</Text>
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
