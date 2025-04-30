import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'expo-router';

export default function DoctorSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Doctor account created! You can now log in.');
      router.replace('/auth/doctor-login');
    } catch (error) {
      Alert.alert('Sign Up Error', (error as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#b6b84b', '#2e5d34']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View className="w-80 bg-white rounded-3xl p-6 shadow-lg items-center">
        <View className="items-center mb-4">
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: 60, height: 60, resizeMode: 'contain', marginBottom: 4 }}
          />
          <Text className="text-lg font-bold text-[#1abc9c] mt-2">BAALI BIGYAN</Text>
        </View>
        <Image
          source={require('../../assets/images/doctor.png')}
          style={{ width: 60, height: 60, resizeMode: 'contain', marginBottom: 8 }}
        />
        <Text className="text-xl font-bold text-center">DOCTOR SIGN UP</Text>
        <View className="flex-row items-center border-b border-gray-400 mt-6 w-full">
          <Ionicons name="at" size={20} color="gray" style={{ marginRight: 4 }} />
          <TextInput
            className="flex-1 py-2 text-gray-700"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>
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
        <View className="flex-row items-center border-b border-gray-400 mt-6 w-full">
          <Ionicons name="lock-closed-outline" size={20} color="gray" style={{ marginRight: 4 }} />
          <TextInput
            className="flex-1 py-2 text-gray-700"
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>
        <TouchableOpacity
          onPress={handleSignUp}
          className="mt-6 w-full bg-yellow-300 rounded-xl py-2 shadow-md"
          disabled={loading}
        >
          <Text className="text-center text-lg font-bold text-black">
            {loading ? 'Signing up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-black">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/auth/doctor-login')}>
            <Text className="text-blue-700 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center mt-2">
          <Text className="text-black">Are you a user? </Text>
          <TouchableOpacity onPress={() => router.replace('/auth/user-signup')}>
            <Text className="text-blue-700 font-semibold">User Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
