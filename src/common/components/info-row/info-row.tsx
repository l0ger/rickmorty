import React, {FC} from 'react';
import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native';

export interface InfoRowProps {
  value?: string;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
}
const InfoRow: FC<InfoRowProps> = ({
  value,
  label,
  labelStyle,
}: InfoRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{`${label}:`}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
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
  label: {
    paddingLeft: 7,
    fontSize: 14,
    color: '#455a64',
    fontWeight: 'bold',
    width: 70,
  },
  value: {
    fontSize: 14,
    color: '#455a64',
    flex: 1,
  },
});

export default InfoRow;
