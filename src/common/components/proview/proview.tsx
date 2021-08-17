import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewStyle, StyleProp} from 'react-native';
import {Loading} from '../loading';

interface ProViewProps {
  loading?: boolean;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const ProView: FC<ProViewProps> = ({
  children,
  loading,
  error,
  containerStyle,
}) => {
  return (
    <View style={[styles.mainView, containerStyle]}>
      {loading && (
        <View style={styles.loadingView}>
          <Loading />
        </View>
      )}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      {!loading && !error && children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: 5},
  loadingView: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  errorMessage: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    color: 'white',
    backgroundColor: '#DE3163',
  },
});

export default ProView;
