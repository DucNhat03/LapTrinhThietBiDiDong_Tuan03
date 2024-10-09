import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";

export default function Screen_03({ navigation }) {


  const [data, setData] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 1
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Banana",
      price: 28.09,
      image: require("../assets/Data/chuoi1.png"),
      sl: 2
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Dragon fruit",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
      sl: 1
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Tomato",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 1
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Potato",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 1
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Cucumber",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 3
    },
    {
      key: "7",
      type: "Vegetable",
      name: "Onion",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 4
    },
    {
      key: "8",
      type: "Vegetable",
      name: "Garlic",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 1
    },
    {
      key: "9",
      type: "Vegetable",
      name: "Pepper",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 4
    },
    {
      key: "10",
      type: "Vegetable",
      name: "Broccoli",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
      sl: 1
    },

    {
      key: "11",
      type: "Seafood",
      name: "Seafood 1",
      price: 28.09,
      image: require("../assets/Data/haisan1.png"),
    },
    {
      key: "12",
      type: "Seafood",
      name: "Seafood 2",
      price: 28.09,
      image: require("../assets/Data/haisan1.png"),
    },
    {
      key: "13",
      type: "Seafood",
      name: "Seafood 3",
      price: 28.09,
      image: require("../assets/Data/haisan1.png"),
    },
    {
      key: "14",
      type: "Seafood",
      name: "Seafood 4",
      price: 28.09,
      image: require("../assets/Data/haisan2.png"),
    },
    {
      key: "15",
      type: "Seafood",
      name: "Seafood 5",
      price: 28.09,
      image: require("../assets/Data/haisan2.png"),
    },

    {
      key: "16",
      type: "Drink",
      name: "Drink 1",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "17",
      type: "Drink",
      name: "Drink 2",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "18",
      type: "Drink",
      name: "Drink 3",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "19",
      type: "Drink",
      name: "Drink 4",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "20",
      type: "Drink",
      name: "Drink 5",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "21",
      type: "Drink",
      name: "Drink 6",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
  ]);

  const [type, setType] = useState("Vegetable");
  const [selectedBtn, setSelectedBtn] = useState("Vegetable");
  const [soLuong, setSoLuong] = useState(1);

  return (
    <ScrollView stickyHeaderIndices={[0, -1]}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Image
            source={require("../assets/Data/back.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 50,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          My Basket
        </Text>
      </View>

      <FlatList
        data={data.filter((item) => item.type == type)}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              marginHorizontal: "2.5%",
              padding: 15,
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{ width: 70, height: 70, marginRight: 10 }}
              resizeMode="contain"
            />

            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {item.price}
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  color: "silver",
                }}
              >
                {item.name}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/Data/cong.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={require("../assets/Data/cong.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={require("../assets/Data/cong.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={require("../assets/Data/cong.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={require("../assets/Data/cong.png")}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
              </View>
            </View>

            <View
              style={{
                marginLeft: 140,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/Data/tru.png")}
                style={{ width: 15, height: 15, marginTop: 10 }}
              />

              <Text style={{ fontSize: 15, marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>{item.sl}</Text>
              <Image
                source={require("../assets/Data/tru.png")}
                style={{ width: 15, height: 15, marginTop: 10 }}
              />
            </View>
          </View>
        )}
      />

      <View
        style={{
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 30 }}>Total</Text>
          <Text style={{ fontSize: 30 }}>$ 320.00</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 90,
            marginVertical: 20,
          }}
          onPress={() => {
              navigation.navigate("Screen_04");
          }}

        >
          <Text style={{ fontSize: 20, color: "white" }} >Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
