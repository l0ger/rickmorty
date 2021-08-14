import React, {FC, useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  useWindowDimensions,
  TextInputProps,
} from 'react-native';

export interface SearchInputProps extends TextInputProps {
  // text: string;
  containerStyle?: StyleProp<TextStyle>;
  // onPress?: (event: GestureResponderEvent) => void;
}
const SearchInput: FC<SearchInputProps> = ({containerStyle, ...rest}) => {
  // const [open, setOpen] = useState(false);
  const window = useWindowDimensions();
  // const onPressHandler = (event: GestureResponderEvent) => {
  //   onPress && onPress(event);
  //   setOpen(prev => !prev);
  // };
  return (
    <View style={[styles.container, {width: window.width}, containerStyle]}>
      <TextInput {...rest} />
      <FontAwesomeIcon name={'search'} />
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

export default SearchInput;
