import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/custom/buttons/CustomButton";
import { Theme } from "../../../constants/Theme";
import { scale } from "../../../utils/responsive";

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/onboardingbg.png")} style={styles.backgroundImage} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome </Text>
          <Text style={styles.subtitle}>Let's get started</Text>
        </View>
        <View style={styles.phoneLoginContainer}>
          <TextInput style={styles.phoneInput} placeholder="Enter your phone number" keyboardType="numeric" />
          <TouchableOpacity style={styles.phoneLoginButton}>
            <Text style={styles.phoneLoginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={[styles.socialIconButton, styles.facebookShadow]}>
            <FontAwesome name="facebook" size={28} color={Theme.Colors.background} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialIconButton, styles.googleShadow]}>
            <AntDesign name="google" size={28} color={Theme.Colors.background} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialIconButton, styles.appleShadow]}>
            <FontAwesome name="apple" size={28} color={Theme.Colors.background} />
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <CustomButton title="Sign up" onPress={() => {}} style={styles.signupButton} />
        </View>
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing, you agree to our</Text>
          <Text style={styles.termsTextLink}>Terms of Service</Text>
          <Text style={styles.termsText}>and</Text>
          <Text style={styles.termsTextLink}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
}

const SOCIAL_BUTTON_SIZE = scale(56);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    padding: Theme.Spacing.screen,
  },
  title: {
    fontSize: Theme.Typography.h1.fontSize,
    fontWeight: "700",
    color: Theme.Colors.background,
    marginBottom: scale(24),
  },
  titleContainer: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: Theme.Typography.h2.fontSize,
    fontWeight: "400",
    color: Theme.Colors.background,
  },
  phoneLoginContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: Theme.Colors.background,
  },
  phoneLoginButton: {
    backgroundColor: Theme.Colors.primary,
    padding: Theme.Spacing.screen,
    borderRadius: Theme.Spacing.screen,
  },
  phoneLoginButtonText: {
    color: Theme.Colors.background,
    fontSize: Theme.Typography.h2.fontSize,
    fontWeight: "700",
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginVertical: scale(24),
  },
  socialIconButton: {
    width: SOCIAL_BUTTON_SIZE,
    height: SOCIAL_BUTTON_SIZE,
    borderRadius: SOCIAL_BUTTON_SIZE / 2,
    backgroundColor: Theme.Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: scale(8),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  facebookShadow: {
    // Optionally, you can add a blue border or shadow for Facebook
  },
  googleShadow: {
    // Optionally, you can add a red border or shadow for Google
  },
  appleShadow: {
    // Optionally, you can add a black border or shadow for Apple
  },
  signupContainer: {
    alignItems: "center",
    gap: 8,
  },
  signupText: {
    color: Theme.Colors.background,
    fontSize: 16,
    fontWeight: "400",
  },
  
  signupButton: {
    backgroundColor: Theme.Colors.primary,
    padding: Theme.Spacing.screen,
    borderRadius: Theme.Spacing.screen,
    fontSize: 16,
    fontWeight: "700",
    color: Theme.Colors.background,
    width: "100%",
  },

  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(12),
    paddingHorizontal: scale(12),
    gap: 4,
  },
  termsText: {
    color: Theme.Colors.background,
    fontWeight: "400",
    fontSize: 14,
  },
  termsTextLink: {
    textDecorationLine: "underline",
    color: Theme.Colors.background,
    fontSize: 14,
    fontWeight: "700",
  },
});

export default SignInScreen;