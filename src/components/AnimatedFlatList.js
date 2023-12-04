import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Button } from "native-base";

const ans = ["الف", "ب", "ج", "د"];

function AnimatedFlatList(props) {
  const [correct, setCorrect] = useState("");

  useEffect(() => {
    setCorrect("");
    console.log(props.correctAnswer);
  }, [props.data]);

  const handleCorrect = function(text) {
    setCorrect(text);
    props.handleClick(text);
  };
  const returnColor = function(input) {
    if (correct === "") return ["rgba(255,255,255,0.8)", "black"];
    if (input === props.correctAnswer) return ["rgba(255,255,255,0.8)", "green"];
    return ["red", "rgba(255,255,255,0.8)"];
  };
  const returnColorTwo = function(input) {
    if (correct === "") return ["orange", "white"];
    if (input === props.correctAnswer) return ["green", "white"];
    return ["white", "red"];
  };
  return (
    <>
      {
        props.data.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => handleCorrect(item)} key={index}>
              <View
                style={{
                  display: "flex",
                  flexWrap: "",
                  flexDirection: "row",
                  // backgroundColor: 'rgba(255,255,255,0.8)',

                  backgroundColor: returnColor(item)[0],
                  borderRadius: 5,
                  marginVertical: 7,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: 10,
                  maxWidth: "100%",

                }}>
                <View style={{ marginHorizontal: 10, width: "80%" }}>
                  <Text numberOfLines={4} style={{ fontSize: 20, color: returnColor(item)[1] }}>{item}</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: returnColorTwo(item)[0],
                    borderRadius: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ color: returnColorTwo(item)[1] }}>{ans[index]}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      }
    </>
  );
}

export default AnimatedFlatList;
