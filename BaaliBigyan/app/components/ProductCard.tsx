import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getImageUrl } from '../../services/storage';

interface ProductCardProps {
  product: {
    name: string;
    rating: number;
    price: number;
    imagePath: string; // Firebase storage path
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const url = await getImageUrl(product.imagePath);
        setImageUrl(url);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
  }, [product.imagePath]);

  return (
    <View className="bg-white rounded-lg w-48 shadow-md">
      {imageUrl && (
        <Image 
          source={{ uri: imageUrl }} 
          className="w-full h-32 rounded-t-lg" 
          resizeMode="cover" 
        />
      )}
      <View className="p-3">
        <Text className="text-sm font-medium">{product.name}</Text>
        <View className="flex flex-row items-center my-1">
          <AntDesign name="star" size={16} color="#F59E0B" />
          <Text className="text-xs text-gray-600 ml-1">{product.rating}</Text>
        </View>
        <Text className="text-lg font-bold text-gray-800">Rs. {product.price.toFixed(2)}</Text>
        <TouchableOpacity className="bg-yellow-400 rounded-md py-2 mt-2 w-full text-center">
          <Text className="text-sm font-semibold text-gray-800">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;