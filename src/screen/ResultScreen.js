import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "native-base";

export default function ResultScreen(props) {
  const dariResult = `${props.route.params.correctAnswers} سوال از جمله 10 سوال درست جواب داده شد `;
  const pashtoResult = ` له 10 پوښتنو څخه${props.route.params.correctAnswers} سم ځواب شوي `;

  // const [scores, setScores] = useState([])
  // const db = SQLite.openDatabase('scoredr.db')
  //
  // useEffect(() => {
  //    db.transaction(tx => {
  //       tx.executeSql('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, score INTEGER')
  //    })
  //    db.transaction(tx => {
  //       tx.executeSql('SELECT * FROM scores', null,
  //          (txObj, resultSet) => setScores(resultSet.rows._array),
  //          (txObj, error) => console.log(error))
  //    })
  // }, [])

  return (
    <View style={{
      display: "flex",
      alignItems: "center",
      height: "100%",
      padding: 10,
      justifyContent: "center",
    }}>
      <AnimatedCircularProgress
        size={150}
        width={20}
        fill={20}
        tintColor="green"
        backgroundColor="white">
        {
          (fill) => (
            <Text style={{color: 'black', fontSize: 25}}>
              { props.route.params.correctAnswers }
            </Text>
          )
        }
      </AnimatedCircularProgress>

      <Text style={{ marginVertical: 50, fontSize: 17 }}>
        {
          props.route.params.language === "Dari" ? dariResult : pashtoResult
        }
      </Text>
      <Button style={{ width: "50%", backgroundColor: "rgb(70,155,1)" }}
              onPress={() => props.navigation.navigate("Home")}>
        Start Again
      </Button>
      <View>

      </View>
    </View>
  );
}
