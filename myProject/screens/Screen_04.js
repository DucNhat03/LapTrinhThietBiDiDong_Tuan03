import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Screen_04({ navigation }) {
  // ví dụ số tiền cố định
  const amount = 320.00;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Data/payment done.png")}
        style={styles.image}
      />
      <Text style={styles.message}>Payment Success</Text>
      <Text style={styles.amount}>Amount: ${amount.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen_01")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10
  },
  amount: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});
