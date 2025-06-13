import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Colors } from '../../../constants/Colors';

const BUTTON_COLORS = {
  primary: Colors.primary,
  secondary: Colors.secondary,
};

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  type: keyof typeof BUTTON_COLORS;
  style?: StyleProp<ViewStyle>;
}

const CustomButton = ({ text, onPress, type = 'primary', style }: CustomButtonProps) => {
  const backgroundColor = BUTTON_COLORS[type] || BUTTON_COLORS.primary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});