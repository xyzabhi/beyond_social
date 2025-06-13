import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../../components/custom/buttons/CustomButton";
import { Theme } from "../../../constants/Theme";
import { scale } from "../../../utils/responsive";

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/onboardingbg.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Let's get started</Text>
        </View>

        <View style={styles.phoneLoginContainer}>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="numeric"
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity style={styles.phoneLoginButton}>
            <Text style={styles.phoneLoginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialIconButton}>
            <FontAwesome name="facebook" size={24} color={"#3b5998"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconButton}>
            <AntDesign name="google" size={24} color={"#4285F4"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconButton}>
            <FontAwesome name="apple" size={24} color={"#000"} />
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <CustomButton text="Sign up" onPress={() => {}} type="primary" style={styles.signupButton} />
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing, you agree to our </Text>
          <Text style={styles.termsTextLink}>Terms of Service </Text>
          <Text style={styles.termsText}>and </Text>
          <Text style={styles.termsTextLink}>Privacy Policy</Text>
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
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  content: {
    zIndex: 1,
    paddingHorizontal: Theme.Spacing.screen,
    paddingVertical: scale(32),
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: scale(16),
    alignItems: "center",
  },
  title: {
    fontSize: Theme.Typography.h1.fontSize,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: Theme.Typography.h2.fontSize,
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: scale(4),
  },
  phoneLoginContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: scale(32),
    gap: scale(8),
  },
  phoneInput: {
    flex: 1,
    height: scale(48),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: scale(8),
    paddingHorizontal: scale(12),
    backgroundColor: "#FFFFFF20",
    color: "#FFFFFF",
  },
  phoneLoginButton: {
    backgroundColor: Theme.Colors.primary,
    borderRadius: scale(8),
    justifyContent: "center",
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
  },
  phoneLoginButtonText: {
    color: "#FFFFFF",
    fontSize: Theme.Typography.h2.fontSize,
    fontWeight: "700",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scale(28),
    paddingHorizontal: scale(16),
    gap: scale(24),
  },
  socialIconButton: {
    width: SOCIAL_BUTTON_SIZE,
    height: SOCIAL_BUTTON_SIZE,
    borderRadius: SOCIAL_BUTTON_SIZE / 2,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),

  },
  signupContainer: {
    marginTop: scale(24),
    width: "100%",
    gap: scale(12),
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  signupButton: {
    width: "100%",
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: scale(20),
    paddingHorizontal: scale(16),
  },
  termsText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 14,
  },
  termsTextLink: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default SignInScreen;
