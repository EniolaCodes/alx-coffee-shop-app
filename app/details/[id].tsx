import CustomButton from "@/components/CustomButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Bean,
  Bike,
  ChevronLeft,
  Heart,
  Milk,
  Star,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COFFEE_DATA } from "../home";

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isReadMore, setIsReadMore] = useState(false);

  const coffee = COFFEE_DATA.find((item) => item.id === String(params.id));
  const finalImage = coffee?.image;
  const imageSource = finalImage ?? require("../../assets/images/coffee-1.png");

  const fullDescription =
    "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 80ml of fresh milk the foamy part. milk foam. is You can add sugar or other sweeteners.";

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row justify-between items-center py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#242424" />
          </TouchableOpacity>
          <Text className="text-[16px] font-semibold text-foundationBlack">
            Detail
          </Text>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <Heart
              size={24}
              color={isFavorite ? "#242424" : "#2F2D2C"}
              fill={isFavorite ? "#242424" : "none"}
            />
          </TouchableOpacity>
        </View>

        {/* Hero Image */}
        <View className="mt-2">
          <Image
            source={imageSource}
            className="w-full h-60 rounded-[24px]"
            resizeMode="cover"
          />
        </View>

        {/* Title Section */}
        <View className="mt-6">
          <Text className="text-2xl font-bold text-[#2F2D2C]">
            {params.name || "Caffe Mocha"}
          </Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-[#A9A9A9] text-sm">Ice/Hot</Text>
            <View className="flex-row space-x-3">
              <IconBadge icon={Bike} />
              <IconBadge icon={Bean} />
              <IconBadge icon={Milk} />
            </View>
          </View>

          {/* Rating */}
          <View className="flex-row items-center mt-4">
            <Star size={20} color="#FBBE21" fill="#FBBE21" />
            <Text className="text-[16px] font-semibold ml-1 text-foundationBlack">
              {params.rating || "4.8"}
            </Text>
            <Text className="text-[#A9A9A9] ml-1 text-sm">(230 reviews)</Text>
          </View>
        </View>

        <View className="h-[1px] bg-grey my-6" />

        {/* Description */}
        <View>
          <Text className="text-[16px] font-semibold text-foundationBlack">
            Description
          </Text>
          <Text className="text-foundationGrey mt-2 leading-6 text-[14px]">
            {isReadMore
              ? fullDescription
              : `${fullDescription.slice(0, 115)}... `}
            <Text
              onPress={() => setIsReadMore(!isReadMore)}
              className="text-coffee font-bold"
            >
              {isReadMore ? " Show Less" : "Read More"}
            </Text>
          </Text>
        </View>

        {/* Size Selection */}
        <View className="mt-6 mb-32">
          <Text className="text-[16px] font-semibold text-foundationBlack">
            Size
          </Text>
          <View className="flex-row justify-between mt-4">
            {["S", "M", "L"].map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                className={`w-[30%] py-3 rounded-2xl items-center border ${
                  selectedSize === size
                    ? "bg-[##F9F2ED] border-coffee "
                    : "bg-foundationWhite border-foundationSurface"
                }`}
              >
                <Text
                  className={`text-base ${
                    selectedSize === size
                      ? "text-coffee"
                      : "text-foundationBlack"
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-8 pt-6 pb-10 flex-row justify-between items-center border-t border-[#F1F1F1] rounded-t-[30px]">
        <View>
          <Text className="text-[#909090] text-sm">Price</Text>
          <Text className="text-lg font-semibold text-coffee">
            $ | {params.price || "4.53"}
          </Text>
        </View>
        <CustomButton
          title="Buy Now"
          onPress={() => router.push("/order")}
          containerStyles="w-[65%] rounded-[20px]"
        />
      </View>
    </SafeAreaView>
  );
}

// Helper component for the small icon squares
const IconBadge = ({ icon: Icon }: { icon: any }) => (
  <View className="bg-[#F9F9F9] p-2 rounded-xl ml-2">
    <Icon size={20} color="#C67C4E" />
  </View>
);
