import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ContactListItem = ({ user }) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {user.name}
          </Text>
          <Text numberOfLines={2}>{user.status}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 7,
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  row: {
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
  },
});
