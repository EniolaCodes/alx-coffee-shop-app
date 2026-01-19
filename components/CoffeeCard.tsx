import { Plus, Star } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CoffeeCardProps {
  name: string;
  description: string;
  price: string;
  rating: number;
  image: any;
  onPress: () => void;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  name,
  description,
  price,
  rating,
  image,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    className="bg-foundationWhite p-2 rounded-[16px] w-[48%] mb-4 shadow-sm"
  >
    <View className="relative">
      <Image
        source={image}
        className="w-full h-32 rounded-[12px]"
        resizeMode="cover"
      />
      <View className="absolute top-2 right-2 flex-row items-center bg-black/30 rounded-full">
        <Star size={10} color="#FBBE21" fill="#FBBE21" />
        <Text className="text-foundationSurface text-[8px] ml-1 font-semibold">
          {rating}
        </Text>
      </View>
    </View>
    <View className="mt-3 px-1">
      <Text className="text-foundationBlack font-semibold text-[16px]">
        {name}
      </Text>
      <Text className="text-foundationGrey text-xs">{description}</Text>
      <View className="flex-row justify-between items-center mt-3 mb-1">
        <Text className="text-foundationBlack font-semibold text-lg">
          $ {price}
        </Text>
        <TouchableOpacity className="bg-coffee p-2 rounded-[8px]">
          <Plus size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);
