import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit3,
  FileText,
  Minus,
  Percent,
  Plus,
  Wallet,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderScreen() {
  const router = useRouter();
  const [orderType, setOrderType] = useState<"Deliver" | "Pick Up">("Deliver");
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#242424" />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-foundationBlack">
          Order
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6">
        {/* Deliver / Pick Up Toggle */}
        <View className="bg-[#EDEDED] flex-row p-1 rounded-2xl mt-4">
          <TouchableOpacity
            onPress={() => setOrderType("Deliver")}
            className={`flex-1 py-3 rounded-xl items-center ${
              orderType === "Deliver" ? "bg-coffee" : ""
            }`}
          >
            <Text
              className={`text-base ${
                orderType === "Deliver"
                  ? "text-foundationWhite"
                  : "text-foundationBlack"
              }`}
            >
              Deliver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOrderType("Pick Up")}
            className={`flex-1 py-3 rounded-xl items-center ${
              orderType === "Pick Up" ? "bg-coffee" : ""
            }`}
          >
            <Text
              className={`text-base ${
                orderType === "Pick Up"
                  ? "text-foundationWhite"
                  : "text-foundationBlack"
              }`}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Address */}
        <View className="mt-8">
          <Text className="text-base font-semibold text-foundationBlack">
            Delivery Address
          </Text>
          <Text className="text-[14px] font-semibold text-foundationBlack mt-4">
            Jl. Kpg Sutoyo
          </Text>
          <Text className="text-[#A9A9A9] text-[12px] mt-1">
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>

          <View className="flex-row mt-4 space-x-3">
            <TouchableOpacity className="flex-row items-center border border-foundationGrey rounded-full px-4 py-2">
              <Edit3 size={16} color="#2F2D2C" />
              <Text className="ml-2 text-[12px] text-foundationBlack">
                Edit Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center border border-foundationGrey rounded-full px-4 py-2 ml-3">
              <FileText size={16} color="#2F2D2C" />
              <Text className="ml-2 text-[12px] text-foundationBlack">
                Add Note
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-[1px] bg-foundationGrey my-6" />

        {/* Order Item */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/coffee-1.png")}
              className="w-14 h-14 rounded-xl"
            />
            <View className="ml-4">
              <Text className="text-base font-semibold text-foundationBlack">
                Caffe Mocha
              </Text>
              <Text className="text-xs text-foundationGrey">Deep Foam</Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-4">
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              className="border border-[#EAEAEA] rounded-full p-1"
            >
              <Minus size={16} color="#2A2A2A" />
            </TouchableOpacity>
            <Text className="text-base text-[#2A2A2A] font-semibold mx-4">
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              className="border border-[#EAEAEA] rounded-full p-1"
            >
              <Plus size={16} color="#2A2A2A" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Discount Section */}
        <TouchableOpacity className="flex-row items-center justify-between bg-foundationWhite border border-[#EDEDED] rounded-2xl p-4 mt-6">
          <View className="flex-row items-center">
            <Percent size={20} color="#C67C4E" />
            <Text className="ml-3 text-sm font-semibold text-black">
              1 Discount is Applied
            </Text>
          </View>
          <ChevronRight size={20} color="#2A2A2A" />
        </TouchableOpacity>

        {/* Payment Summary */}
        <View className="mt-8">
          <Text className="text-base font-semibold text-foundationBlack">
            Payment Summary
          </Text>
          <View className="flex-row justify-between mt-4">
            <Text className="text-sm text-black">Price</Text>
            <Text className="text-sm font-semibold text-black">$ 4.53</Text>
          </View>
          <View className="flex-row justify-between mt-4 mb-20">
            <Text className="text-sm text-black">Delivery Fee</Text>
            <View className="flex-row items-center">
              <Text className="text-sm text-foundationGrey line-through mr-2">
                $ 2.0
              </Text>
              <Text className="text-base font-semibold text-black">$ 1.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Order Bar */}
      <View className="bg-white px-8 pt-6 pb-10 border-t border-[#F1F1F1] rounded-t-[30px]">
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <Wallet size={24} color="#C67C4E" />
            <View className="ml-3">
              <Text className="text-sm font-bold text-foundationBlack">
                Cash/Wallet
              </Text>
              <Text className="text-xs font-bold text-coffee">$ 5.53</Text>
            </View>
          </View>
          <ChevronDown size={20} color="#2F2D2C" />
        </View>

        <CustomButton
          title="Order"
          onPress={() => router.push("/delivery")}
          containerStyles="w-full rounded-full"
        />
      </View>
    </SafeAreaView>
  );
}
