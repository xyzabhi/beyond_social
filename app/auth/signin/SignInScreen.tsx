import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../../components/custom/buttons/CustomButton';
import { Theme } from '../../../constants/Theme';
import { scale } from '../../../utils/responsive';

function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/onboardingbg.png')}
        style={styles.backgroundImage}
      />

      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Let's get started</Text>
          </View>

          <View style={styles.phoneLoginContainer}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              keyboardType="numeric"
              placeholderTextColor="#ccc"
            />
            <CustomButton
              text="Continue"
              onPress={() => {}}
              type="primary"
              style={styles.continueButton}
            />
          </View>

          <View style={styles.socialLoginContainer}>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.8}
              style={styles.socialIconButton}
            >
              <AntDesign name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.8}
              style={styles.socialIconButton}
            >
              <FontAwesome name="apple" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.8}
              style={styles.socialIconButton}
            >
              <FontAwesome name="facebook" size={24} color="#3b5998" />
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <CustomButton
              text="Sign up"
              onPress={() => router.push('/auth/signup/SignUpScreen')}
              type="secondary"
              style={styles.signupButton}
            />
          </View>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
            </Text>
            <Text style={styles.termsTextLink}>Terms of Service </Text>
            <Text style={styles.termsText}>and </Text>
            <Text style={styles.termsTextLink}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const SOCIAL_BUTTON_SIZE = scale(48);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.background,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: Theme.Spacing.screen,
    paddingBottom: scale(32),
  },
  titleContainer: {
    marginBottom: scale(16),
  },
  title: {
    fontSize: Theme.Typography.h1.fontSize,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: Theme.Typography.h2.fontSize,
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: scale(4),
  },
  phoneLoginContainer: {
    width: '100%',
    marginTop: scale(24),
    gap: scale(12),
  },
  phoneInput: {
    height: scale(42),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: scale(12),
    paddingHorizontal: scale(12),
    backgroundColor: '#FFFFFF',
    color: '#000',
    fontSize: 18,
    letterSpacing: 1,
  },
  continueButton: {
    width: '100%',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(24),
  },
  socialIconButton: {
    width: scale(42),
    height: scale(42),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  signupContainer: {
    marginTop: scale(24),
    width: '100%',
    gap: scale(12),
    alignItems: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  signupButton: {
    width: '100%',
  },
  termsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: scale(16),
    paddingHorizontal: scale(16),
  },
  termsText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
  },
  termsTextLink: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default SignInScreen;
