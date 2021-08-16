import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {Loading} from '../loading';
interface LoadingProps extends ActivityIndicatorProps {
  loading?: boolean;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const Proview: FC<LoadingProps> = ({
  children,
  loading,
  error,
  containerStyle,
}) => {
  return (
    <View style={[styles.mainView, containerStyle]}>
      {loading && <Loading />}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
  errorMessage: {padding: 20, textAlign: 'center', fontSize: 20, width: '100'},
});

export default Proview;
