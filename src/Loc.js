import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Request permission to access location
    Geolocation.requestAuthorization();

    // Get the current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => setError(error.message),
      { enableHighAccuracy: true, timeout: 150000, maximumAge: 10000 }
    );

    // Watch for location updates
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => setError(error.message),
      { enableHighAccuracy: true, distanceFilter: 10 }
    );

    return () => {
      // Clean up the watchId to stop listening for updates
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <Text>
          Latitude: {latitude}, Longitude: {longitude}
        </Text>
      )}
    </View>
  );
};

export default App;