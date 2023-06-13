import React from "react";
import { ScrollView, Animated, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

/*let accelerometerSubscription = accelerometer.subscribe(({ x, y, z }) => {
  console.log(`Accelerometer: x=${x} y=${y} z=${z}`);
});

let gyroscopeSubscription = gyroscope.subscribe(({ x, y, z }) => {
  console.log(`Gyroscope: x=${x} y=${y} z=${z}`);
});*/

const About = (props) => {
  return (
    <ScrollView>
      <Text>this</Text>
      <CountdownCircleTimer
        isPlaying
        duration={30} // The duration of the countdown in seconds
        colors={[["#004777", 0.4], ["#F7B801", 0.4], ["#A30000"]]} // Customize the colors of the timer
        onComplete={() => console.log("Countdown completed")} // Action to perform when the countdown completes
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor, fontSize: 24 }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </ScrollView>
  );
};

export default About;
