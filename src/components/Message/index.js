import { StyleSheet, Text, View } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "lightblue" : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.text}> {message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // alignSelf: "flex-end",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  time: {
    color: "grey",
    alignSelf: "flex-end",
  },
});
