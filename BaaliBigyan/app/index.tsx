// components/LandingPage.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <LinearGradient
        colors={['#bdb76b', '#4caf50']}
        className="flex-1"
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-white rounded-3xl p-8 w-11/12 max-w-xs items-center shadow-lg">
            {/* Logo and App Name */}
            <View className="items-center mb-8">
              <Image
                source={require("../assets/images/logo.png")}
                className="w-24 h-24 mb-4"
                resizeMode="contain"
              />
              <Text className="text-green-700 text-2xl font-bold tracking-wide">
                BAALI BIGYAN
              </Text>
            </View>

            {/* Doctor Login */}
            <View className="items-center mb-8">
              <Image
                source={require("../assets/images/doctor.png")}
                className="w-16 h-16 mb-4 tint-black"
                resizeMode="contain"
              />
              <TouchableOpacity
                className="bg-yellow-200 rounded-xl px-8 py-3 shadow mb-2 w-full items-center"
                onPress={() => router.push("/auth/doctor-login")}
              >
                <Text className="text-black font-semibold text-lg">Doctor Login</Text>
              </TouchableOpacity>
            </View>

            {/* User Login */}
            <View className="items-center">
              <Image
                source={require("../assets/images/user.png")}
                className="w-16 h-16 mb-4 tint-black"
                resizeMode="contain"
              />
              <TouchableOpacity
                className="bg-yellow-200 rounded-xl px-8 py-3 shadow w-full items-center"
                onPress={() => router.push("/auth/user-login")}
              >
                <Text className="text-black font-semibold text-lg">User Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}