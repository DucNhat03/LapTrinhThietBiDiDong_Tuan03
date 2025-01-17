import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={{ color: "green", fontSize: 30, fontWeight: "bold" }}>
          Order your favorite!
        </Text>
      </View>
      <View style={styles.style2}>
        <Image
          source={require('../assets/Data/drink.png')}
          style={{ width: 150, height: 150, marginLeft: 215 }}
        />
        <Image
          source={require('../assets/Data/haisan2.png')}
          style={{ width: 150, height: 150, marginLeft: 20, marginTop: -25 }}
        />
        <Image
          source={require('../assets/Data/haisan1.png')}
          style={{ width: 150, height: 150, marginLeft: 200, marginTop: 30 }}
        />
      </View>
      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 248,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen_02")}
        >
          <Text>Go to Screen 02</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  style1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  style2: {
    flex: 3,
    backgroundColor: "#fff",
  },
  style3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
