import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";
import ChatScreen from "./src/screens/ChatScreen";
import { MaterialIcons } from "@expo/vector-icons";
import Navigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <View style={styles.container}>
      <Navigator>
        <ChatScreen />
      </Navigator>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
});
export default withAuthenticator(App);
