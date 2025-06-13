import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { Theme } from "../../../constants/Theme";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function CustomButton({ title, onPress, style, variant = 'primary', disabled = false }: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, variant === 'primary' ? styles.primary : styles.secondary, disabled && styles.disabled, style]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.title, variant === 'primary' ? styles.primaryText : styles.secondaryText, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  primary: {
    backgroundColor: Theme.Colors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Theme.Colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  primaryText: {
    color: Theme.Colors.background,
  },
  secondaryText: {
    color: Theme.Colors.primary,
  },
  disabledText: {
    color: Theme.Colors.textSecondary,
  },
});

export default CustomButton;    