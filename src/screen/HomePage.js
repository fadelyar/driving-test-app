import { View, ImageBackground, StyleSheet, Text, LogBox } from "react-native";
import { Button, Box } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import React from "react";


export default function HomePage(props) {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([
    { label: "Dari", value: "Dari" },
    { label: "Pashto", value: "Pashto" },
  ]);

  React.useEffect(() => {
    LogBox.ignoreLogs(["In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."]);
  }, []);

  const onClick = function() {
    props.navigation.navigate("Quiz", { language: value.toString() });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require("../../assets/20863790_6387982.jpg")} // Replace with the path to your image
        style={styles.imageBackground}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Driving Test</Text>
        <Box style={{
          height: "75%", width: "100%", display: "flex",
          justifyContent: "flex-end", alignItems: "center",
        }}>
          <DropDownPicker
            open={open}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              width: 145,
              alignItems: "center",
              marginVertical: 10,
            }}
            style={{ width: 145, height: 50 }}
            value={value}
            items={items}
            placeholder="Select Language"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <Button style={{ width: "40%", backgroundColor: "rgb(70,155,1)" }} onPress={onClick}>
            START THE QUIZ
          </Button>
        </Box>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  imageBackground: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
