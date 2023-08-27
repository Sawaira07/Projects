from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the dataset
dataset = pd.read_csv('Resquickdataset.csv')

# Preprocess the dataset
label_encoder = preprocessing.LabelEncoder()
dataset['label'] = label_encoder.fit_transform(dataset['label'])

X = dataset.iloc[:, :-1]
Y = dataset.iloc[:, -1]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=0)

# Train the model
classifier = Sequential()
classifier.add(Dense(units=6, kernel_initializer='uniform', activation='relu', input_dim=6))
classifier.add(Dense(units=6, kernel_initializer='uniform', activation='relu'))
classifier.add(Dense(units=1, kernel_initializer='uniform', activation='sigmoid'))
classifier.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
history = classifier.fit(X_train, y_train, batch_size=10, epochs=200, validation_split=0.2)

# Prediction function
def predict_data(data):
    predictions = classifier.predict(data)
    rounded_predictions = np.round(predictions).astype(int)
    return rounded_predictions

# API endpoint for training and prediction
@app.route('/train_predict', methods=['POST'])
@CORS(app, resources={r"/train_predict": {"origins": "*"}})
def train_predict():
    try:
        # Retrieve data from the request
        data = request.json  # Assuming the request contains a JSON object with the input data

        # Convert the data to a NumPy array for prediction
        input_data = np.array(data['input_data'])

        # Make predictions
        predictions = predict_data(input_data)

        # Prepare the response
        response = {
            'predictions': predictions.tolist()
        }

        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=2000)
