import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'expo-router';

export default function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Firebase Auth expects email, not just username
      await signInWithEmailAndPassword(auth, username, password);
      Alert.alert('Success', 'Login successful!');
      // TODO: Navigate to your app's main screen here
    } catch (error: any) {
      Alert.alert('Login Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Implement password reset here.');
  };

  return (
    <LinearGradient
      colors={['#b6b84b', '#2e5d34']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View className="w-80 bg-white rounded-3xl p-6 shadow-lg items-center">
        {/* Logo and App Name */}
        <View className="items-center mb-4">
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: 60, height: 60, resizeMode: 'contain', marginBottom: 4 }}
          />
          <Text className="text-lg font-bold text-[#1abc9c] mt-2">BAALI BIGYAN</Text>
        </View>
        {/* User Icon */}
        <Ionicons name="person" size={60} color="black" style={{ marginBottom: 8 }} />
        <Text className="text-xl font-bold text-center">USER{"\n"}LOGIN</Text>
        {/* Username Input */}
        <View className="flex-row items-center border-b border-gray-400 mt-6 w-full">
          <Ionicons name="at" size={20} color="gray" style={{ marginRight: 4 }} />
          <TextInput
            className="flex-1 py-2 text-gray-700"
            placeholder="Enter your email"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>
        {/* Password Input */}
        <View className="flex-row items-center border-b border-gray-400 mt-6 w-full">
          <Ionicons name="lock-closed-outline" size={20} color="gray" style={{ marginRight: 4 }} />
          <TextInput
            className="flex-1 py-2 text-gray-700"
            placeholder="*************"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>
        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword} className="mt-4 w-full">
          <Text className="text-center text-black font-semibold">FORGOT PASSWORD</Text>
        </TouchableOpacity>
        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="mt-6 w-full bg-yellow-300 rounded-xl py-2 shadow-md"
          disabled={loading}
        >
          <Text className="text-center text-lg font-bold text-black">
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>
        {/* Sign Up Link */}
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-black">Don't Have  An ACCOUNT? </Text>
          <TouchableOpacity onPress={() => router.replace('/auth/user-signup')}>
            <Text className="text-blue-700 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}