import { useColorScheme } from "@/hooks/useColorScheme";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import "react-native-reanimated";
import Step2VibeSelectionScreen from "./auth/signup/Step2VibeSelectionScreen";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    // <SignInScreen />
    <Step2VibeSelectionScreen/>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32, // Large font size
    fontWeight: "bold", // Bold text
    fontFamily: "SpaceMono", // Optional, if you want to apply the loaded font
    textAlign: "center",
    marginTop: 20,
  },
});
