import React, {FC, useState} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  GestureResponderEvent,
  useWindowDimensions,
} from 'react-native';

export interface CollapseViewProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
const CollapseView: FC<CollapseViewProps> = ({
  text,
  textStyle,
  children,
  onPress,
}) => {
  const [open, setOpen] = useState(false);
  const window = useWindowDimensions();
  const onPressHandler = (event: GestureResponderEvent) => {
    onPress && onPress(event);
    setOpen(prev => !prev);
  };
  return (
    <View style={[styles.container, {width: window.width}]}>
      <TouchableOpacity onPress={onPressHandler} style={{width: window.width}}>
        <View style={styles.textView}>
          <Text style={[styles.text, textStyle]}>{`${text}`}</Text>
          {!open && <AntDesignIcon name={'right'} />}
          {open && <AntDesignIcon name={'up'} />}
        </View>
      </TouchableOpacity>
      <View style={{display: open ? 'flex' : 'none'}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ececec',
    paddingRight: 10,
  },
  text: {
    paddingLeft: 7,
    paddingTop: 15,
    fontSize: 16,
    color: '#455a64',
    fontWeight: 'bold',
    width: 70,
    flex: 1,
    paddingBottom: 15,
  },
});

export default CollapseView;
