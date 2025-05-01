import React from 'react';
import { View, Text } from 'react-native';

export interface WeatherInfoProps {
  location: string;
  temperature: string;
  humidity: number;
  windSpeed: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ location, temperature, humidity, windSpeed }) => {
  return (
    <View className="bg-yellow-100 rounded-lg p-4">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg">{location}</Text>
          <Text className="text-3xl font-bold">{temperature}</Text>
        </View>
        <View>
          <Text>Humidity: {humidity}%</Text>
          <Text>Wind Speed: {windSpeed}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;