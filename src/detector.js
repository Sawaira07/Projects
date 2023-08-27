import React, { useState } from 'react';
import { View,Text, Button } from 'react-native';
import axios from 'axios';


const App = () => {
  const [predictions, setPredictions] = useState([]);

  const handlePrediction = async () => {
    try {
      const input_data = [0.13, 9.04, 15, 0.12, 0.09,-5.75]; // Replace with your input data
      const response = await axios.post('http://127.0.0.1:2000/train_predict', {
        input_data: input_data,
      });

      setPredictions(response.data.predictions);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <View>
      <Button title="Predict" onPress={handlePrediction} />
      <View>
        <Text>Predictions: {predictions.join(', ')}</Text>
      </View>
    </View>
  );
};

export default App;
