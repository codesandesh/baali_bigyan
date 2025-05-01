import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface CategoryCardProps {
  category: {
    name: string;
    image: any;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <TouchableOpacity className="w-32 bg-white rounded-lg shadow-sm p-2">
      <Image source={category.image} className="w-full h-24 rounded-lg" resizeMode="cover" />
      <Text className="text-sm font-medium mt-2 text-center">{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;