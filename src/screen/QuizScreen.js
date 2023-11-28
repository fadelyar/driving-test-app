import {View, ImageBackground, StyleSheet, SafeAreaView, Image, FlatList} from 'react-native';
import {Button, Box, Text,} from "native-base";
import {questions, pashtoQuestions, data} from '../data'
import React, {useEffect, useState} from 'react'
import AnimatedFlatList from "../components/AnimatedFlatList";

const images = [
   require('../../assets/questions_image/pictu_5.png'),
   require('../../assets/questions_image/pictu_6.png'),
   require('../../assets/questions_image/pictu_7.png'),
   require('../../assets/questions_image/pictu_8.png'),
   require('../../assets/questions_image/pictu_9.png'),
   require('../../assets/questions_image/pictu_10.png'),
]

export default function QuizScreen(props) {
   const [questionIndex, setQuestionIndex] = React.useState(0)
   const [correctAnswer, setCorrectAnswer] = React.useState(0)
   const [questionSet, setQuestionSet] = useState(data(props.route.params.language))
   const [showNextBt, setShowNext] = useState(false)

   useEffect(() => {
      setQuestionSet(questionSet.sort(() => Math.random() - 0.5).slice(0, 10))

   }, [])

   const handleClick = function (answer) {
      console.log(answer, questionSet[questionIndex].correctAnswer)
      if (answer === questionSet[questionIndex].correctAnswer) {

         setCorrectAnswer(correctAnswer + 1)
      }
      setShowNext(true)
   }

   const handleNext = function () {
      if ((questionSet.length - 1) === questionIndex) {
         props.navigation.navigate('Result', {correctAnswers: correctAnswer, language: props.route.params.language})
      } else {

         setQuestionIndex(questionIndex + 1)
         setShowNext(false)
      }
   }

   return (
      <SafeAreaView style={styles.container}>
         <ImageBackground source={require('../../assets/Capture.png')} style={{
            height: '100%', width: '100%', display: 'flex',
            justifyContent: 'flex-start', alignItems: 'center',
         }}>
            <Box style={{
               display: 'flex',
               flexDirection: 'row',
               maxWidth: '100%',
               padding: 5,
               height: 180,
               backgroundColor: 'rgba(255,255,255,0.8)',
               borderRadius: 5
            }}>
               {
                  questionSet[questionIndex].image && <Box>
                     <Image source={images[questionIndex]}
                            style={{width: 120, height: 120}}/>
                  </Box>
               }
               <Box style={{flexGrow: 1, maxWidth: '100%'}}>
                  <Text style={{
                     textAlign: 'right',
                     marginBottom: 3
                  }}>{questionIndex + 1} of {questionSet.length}</Text>
                  <Text style={{
                     fontFamily: 'monospace',
                     textAlign: 'right',
                     fontSize: 20,
                     marginTop: 5
                  }}>{questionSet[questionIndex].question}؟</Text>
               </Box>
            </Box>
            <Box style={{width: '100%', padding: 10}}>
               <AnimatedFlatList correctAnswer={questionSet[questionIndex].correctAnswer}
                                 data={questionSet[questionIndex].answers} handleClick={handleClick}/>
            </Box>

            {
               showNextBt && <View style={{position: 'absolute', bottom: 30, width: '100%', alignItems: 'center'}}>
                  <Button onPress={handleNext} style={{width: '50%', backgroundColor: 'rgb(70,155,1)'}}
                  >Next</Button>
               </View>
            }

         </ImageBackground>
      </SafeAreaView>


   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      // paddingTop: 23
   },
   imageBackground: {
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
   }
});
