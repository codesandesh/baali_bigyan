import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Import reusable components
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import WeatherInfo from '../components/WeatherInfo';

const HomeScreen = () => {
  // Sample data for categories and products (replace with your actual data)
  const categories = [
    { name: 'VERMI COMPOST', image: require('../../assets/images/vermicompost.png') },
    { name: 'Rejuvenating', image: require('../../assets/images/rejuvenating.png') },
    { name: 'PROPELLER', image: require('../../assets/images/propeller.png') },
  ];

  const products = [
    {
      name: 'Product Name 1',
      rating: 4.7,
      price: 99.99,
      imagePath: 'products/product1.png',
    },
    {
      name: 'Product Name 2',
      rating: 4.7,
      price: 99.99,
      imagePath: 'products/product2.png',
    },
    {
      name: 'Product Name 3',
      rating: 4.7,
      price: 99.99,
      imagePath: 'products/product1.png',
    },
    {
      name: 'Product Name 4',
      rating: 4.7,
      price: 99.99,
      imagePath: 'products/product2.png',
    },
  ];

  return (
    <ScrollView className="bg-gray-100 flex-1">
      <View className="p-4">
        {/* Top Section */}
        <View className="flex flex-row items-center justify-between mb-4">
          <View className='flex flex-row items-center gap-2'>
            <Image
              source={require('../../assets/images/logo.png')} // Replace with your actual logo
              className="w-8 h-8"
              />
            <Text className="text-xl font-bold text-green-500">BAALI BIGYAN</Text>
          </View>
          {/* Add a notification icon here if needed */}
        </View>
        <Text className="text-lg font-semibold">नमस्ते विराट</Text>
        <Text className="text-base text-gray-700 mb-4">तपाईको धान सुरक्षित छ?</Text>

        {/* Weather Information */}
        <WeatherInfo
            location="Kathmandu, Nepal"
            temperature="21°C"
            humidity={28}
            windSpeed={18.12}
        />

        {/* "तपाईंको परीक्षणहरू" Section */}
        <View className="mt-6">
          <Text className="text-lg font-semibold mb-4">तपाईंको परीक्षणहरू</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-4">
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category}/>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Product Listing Section */}
        <View className="mt-6">
          <Text className="text-lg font-semibold mb-4">Product Name</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;