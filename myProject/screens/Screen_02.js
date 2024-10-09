import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { useState } from "react";

export default function Screen_02({ navigation }) {
  const [data, setData] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: 28.09,
      image: require("../assets/Data/apple.png"),
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Banana",
      price: 28.09,
      image: require("../assets/Data/chuoi1.png"),
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Dragon fruit ",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Tomato",
      price: 28.09,
      image: require("../assets/Data/quale.png"),
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Potato",
      price: 28.09,
      image: require("../assets/Data/quale.png"),
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Cucumber",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
    },
    {
      key: "7",
      type: "Vegetable",
      name: "Onion",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
    },
    {
      key: "8",
      type: "Vegetable",
      name: "Garlic",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
    },
    {
      key: "9",
      type: "Vegetable",
      name: "Pepper",
      price: 28.09,
      image: require("../assets/Data/chuoi1.png"),
    },
    {
      key: "10",
      type: "Vegetable",
      name: "Broccoli",
      price: 28.09,
      image: require("../assets/Data/thanhlong.png"),
    },

    {
      key: "11",
      type: "Seafood",
      name: "Combo 1",
      price: 28.09,
      image: require("../assets/Data/haisan2.png"),
    },
    {
      key: "12",
      type: "Seafood",
      name: "Combo 2",
      price: 28.09,
      image: require("../assets/Data/haisan2.png"),
    },
    {
      key: "13",
      type: "Seafood",
      name: "Combo 3",
      price: 28.09,
      image: require("../assets/Data/haisan2.png"),
    },
    {
      key: "14",
      type: "Seafood",
      name: "Combo 4",
      price: 28.09,
      image: require("../assets/Data/haisan1.png"),
    },
    {
      key: "15",
      type: "Seafood",
      name: "Combo 5",
      price: 28.09,
      image: require("../assets/Data/haisan1.png"),
    },

    {
      key: "16",
      type: "Drink",
      name: "Ép táo",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "17",
      type: "Drink",
      name: "Ép ổi",
      price: 28.09,
      image: require("../assets/Data/drink-2.png"),
    },
    {
      key: "18",
      type: "Drink",
      name: "Ép thơm",
      price: 28.09,
      image: require("../assets/Data/drink-2.png"),
    },
    {
      key: "19",
      type: "Drink",
      name: "Ép lựu",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
    {
      key: "20",
      type: "Drink",
      name: "Ép cà rốt",
      price: 28.09,
      image: require("../assets/Data/drink-2.png"),
    },
    {
      key: "21",
      type: "Drink",
      name: "Ép lựu",
      price: 28.09,
      image: require("../assets/Data/drink-3.png"),
    },
  ]);

  const [type, setType] = useState("Vegetable");
  const [selectedBtn, setSelectedBtn] = useState("Vegetable");
  const [initialItemCount, setInitialItemCount] = useState(6);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
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
            navigation.navigate("Screen_01");
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen_03");
          }}
        >
          <Image
            source={require("../assets/Data/giohang.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%" }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            width: "90%",
            height: 50,
            alignSelf: "center",
            marginTop: 20,
            paddingLeft: 20,
            fontSize: 20,
          }}
          placeholder="Search"
        />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == "Vegetable" ? "green" : "white",
          }}
          onPress={() => {
            setType("Vegetable");
            setInitialItemCount(6);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "blue",
            }}
            Vegetable
          ></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == "Seafood" ? "green" : "white",
          }}
          onPress={() => {
            setType("Seafood");
            setInitialItemCount(6);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "blue",
            }}
            Seafood
          ></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 40,
            backgroundColor: type == "Drink" ? "green" : "white",
          }}
          onPress={() => {
            setType("Drink");
            setInitialItemCount(6);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "blue",
            }}
            Drink
          ></Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25, color: "green" }}>
          Order your favorite
        </Text>
        <TouchableOpacity
          onPress={() => {
            setInitialItemCount(data.length);
          }}
        >
          <Text style={{ fontSize: 25, color: "gray" }}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data
          .filter((item) => item.type == type)
          .slice(0, initialItemCount)}
        renderItem={({ item }) => (
          <View
            style={{
              width: "45%",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: "5%",
              paddingVertical: "3%",
              marginVertical: 10,
              marginLeft: 15
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Screen_04");
              }}
            >
              <Image
                source={item.image}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
        numColumns={2}
      />
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
