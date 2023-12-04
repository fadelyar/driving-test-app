import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, View, Text, ImageBackground } from "react-native";
import { Box } from "native-base";
import { data } from "../data/les-data";

export default function LessonsScreen(props) {
  const [questionSet, setQuestionSet] = useState(data(props.route.params.language));
  return (
    <ImageBackground source={require('../../assets/Capture.png')} style={{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    }}>
      <ScrollView contentContainerStyle={{ display: "flex", paddingHorizontal: 5 }}>
        {
          data(props.route.params.language).map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 10,
                  marginVertical: 5,
                  borderRadius: 5,
                  flexWrap: "nowrap",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}>
                {
                  item.image && <Box style={{ marginBottom: 5 }}>
                    <Image source={item.image}
                           style={{ width: 120, height: 120, borderRadius: 30 }} />
                  </Box>
                }
                <View style={{}}>
                  <Text style={{
                    textAlign: "right",
                    fontSize: 25,
                    marginBottom: 3,
                  }}>{item.question}</Text>
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    </ImageBackground>
  );
}
