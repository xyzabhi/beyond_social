import { LocationPermission } from '@/components/sign-up/LocationPermission';
import { NotificationPermission } from '@/components/sign-up/NotificationPermission';
import { ProfileConfirmation } from '@/components/sign-up/ProfileConfirmation';
import { StatusBar } from '@/components/sign-up/StatusBar';
import { UserBioInfo } from '@/components/sign-up/UserBioInfo';
import { UserInfo } from '@/components/sign-up/UserInfo';
import { VibeSelection } from '@/components/sign-up/VibeSelection';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { View } from 'react-native';

export default function SignUpScreen() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 6;
  const onPreviousBtnClick = () => {
    setCurrentStep(prev => prev - 1);
  };
  const onNextBtnClick = () => {
    setCurrentStep(prev => prev + 1);
  };
  const getCurrentTab = () => {
    switch (currentStep) {
      case 1:
        return <UserBioInfo />;
      case 2:
        return <UserInfo />;
      case 3:
        return <VibeSelection />;
      case 4:
        return <ProfileConfirmation />;
      case 5:
        return <LocationPermission />;
      case 6:
        return <NotificationPermission />;
    }
  };
  return (
    <View>
      <StatusBar totalSteps={totalSteps} currentStep={currentStep} />
      {currentStep > 1 && (
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={onPreviousBtnClick}
        />
      )}
      {getCurrentTab()}
      {currentStep < totalSteps && (
        <AntDesign
          name="right"
          size={24}
          color="black"
          onPress={onNextBtnClick}
        />
      )}
    </View>
  );
}
