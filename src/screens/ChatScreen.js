import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "./../components/InputBox/index";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

const ChatScreen = () => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.bg}
    // >
    <ImageBackground styles={styles.bg} source={bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
    // </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
