import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Colors } from '../../../constants/Colors';

const CHIP_VARIANTS = {
  primary: {
    backgroundColor: Colors.primary,
    textColor: '#fff',
    borderColor: Colors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    textColor: Colors.primary,
    borderColor: Colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    textColor: Colors.text,
    borderColor: Colors.border,
  },
  success: {
    backgroundColor: Colors.success,
    textColor: '#fff',
    borderColor: Colors.success,
  },
  error: {
    backgroundColor: Colors.error,
    textColor: '#fff',
    borderColor: Colors.error,
  },
};

interface ChipButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: keyof typeof CHIP_VARIANTS;
  selected?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
}

const ChipButton = ({ 
  children, 
  onPress, 
  variant = 'primary', 
  selected = false,
  disabled = false,
  size = 'medium',
  style 
}: ChipButtonProps) => {
  const chipStyle = CHIP_VARIANTS[variant];
  
  const buttonStyle = [
    styles.chip,
    styles[size],
    {
      backgroundColor: selected ? '#FBD721' : chipStyle.backgroundColor,
      borderColor: selected ? '#FBD721' : chipStyle.borderColor,
    },
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ChipButton;

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    marginVertical: 2,
    flexDirection: 'row',
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  disabled: {
    opacity: 0.5,
  },
});   