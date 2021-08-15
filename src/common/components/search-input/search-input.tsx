import React, {FC} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {throttle} from 'throttle-debounce';
import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';
import {FONT_SIZE} from '../../../constants/theme.constants';

interface SearchInputProps extends TextInputProps {
  containerStyle?: StyleProp<TextStyle>;
  showIcon?: boolean;
  throttleDelay?: number;
}

const SearchInput: FC<SearchInputProps> = ({
  containerStyle,
  style,
  showIcon,
  onChangeText,
  throttleDelay,
  ...rest
}) => {
  const defaultDelay = 500;
  const onChangeTextHandler = throttle(
    throttleDelay || defaultDelay,
    (text: string) => {
      onChangeText && onChangeText(text);
    },
  );
  return (
    <View style={[styles.container, containerStyle]}>
      {showIcon && (
        <FontAwesomeIcon
          name={'search'}
          size={15}
          color={'white'}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        style={[styles.textInput, style]}
        selectionColor={'#FFF'}
        placeholderTextColor="#FFF"
        onChangeText={onChangeTextHandler}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: 100,
  },
  textInput: {flex: 1, color: 'white', fontSize: FONT_SIZE.inputFontSize},
  iconStyle: {
    paddingRight: 10,
  },
});

export default SearchInput;
