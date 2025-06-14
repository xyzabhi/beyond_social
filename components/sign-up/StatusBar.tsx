import { Text, View } from 'react-native';

interface IStatusBarProps {
  totalSteps: number;
  currentStep: number;
}
export const StatusBar: React.FC<IStatusBarProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <View>
      <Text>{totalSteps}</Text>
      <Text>{currentStep}</Text>
    </View>
  );
};
