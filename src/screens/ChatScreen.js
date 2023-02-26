import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "./../components/InputBox/index";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  return (
    <KeyboardAvoidingView
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS === "android" ? 90 : 60}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.bg}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            style={styles.list}
            inverted
          />
          <InputBox />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
