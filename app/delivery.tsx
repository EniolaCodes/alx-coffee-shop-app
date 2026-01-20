import MapComponent from "@/components/MapComponent";
import { useRouter } from "expo-router";
import { Bike, ChevronLeft, Phone } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DeliveryScreen() {
  const router = useRouter();

  // Mock coordinates for the route
  const region = {
    latitude: -6.2297,
    longitude: 106.8295,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const deliveryRoute = [
    { latitude: -6.2297, longitude: 106.8295 },
    { latitude: -6.2305, longitude: 106.831 },
    { latitude: -6.232, longitude: 106.8325 },
    { latitude: -6.2315, longitude: 106.83 },
    { latitude: -6.233, longitude: 106.832 },
    { latitude: -6.235, longitude: 106.835 },
    { latitude: -6.238, longitude: 106.84 },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Map Section */}
      <MapComponent region={region} deliveryRoute={deliveryRoute} />
      <SafeAreaView className="absolute w-full px-6 flex-row justify-between mt-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-white p-3 rounded-2xl shadow-sm"
        >
          <ChevronLeft size={24} color="#2F2D2C" />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Delivery Info Card */}
      <View className="bg-white px-8 pt-4 pb-10 rounded-t-[40px] shadow-2xl -mt-10">
        <View className="items-center mb-6">
          <View className="w-10 h-1 bg-[#EAEAEA] rounded-full mb-6" />
          <Text className="text-base font-semibold text-foundationBlack">
            10 minutes left
          </Text>
          <Text className="text-foundationGrey mt-1 text-[12px]">
            Delivery to{" "}
            <Text className="font-semibold text-foundationBlack">
              Jl. Kpg Sutoyo
            </Text>
          </Text>
        </View>

        {/* Progress Tracker */}
        <View className="flex-row justify-between mb-8 px-2">
          {[1, 2, 3, 4].map((step) => (
            <View
              key={step}
              className={`h-1 w-[22%] rounded-full ${step <= 3 ? "bg-green" : "bg-foundationSurfaceNormal"}`}
            />
          ))}
        </View>

        {/* Status Notification */}
        <View className="flex-row items-center border border-foundationSurface p-4 rounded-2xl mb-6">
          <View className="bg-[#F9F9F9] p-3 rounded-xl border border-[#EAEAEA]">
            <Bike size={24} color="#C67C4E" />
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-[14px] font-semibold text-foundationBlack">
              Delivered your order
            </Text>
            <Text className="text-xs text-foundationGrey leading-4">
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        {/* Courier Details */}
        <View className="flex-row items-center">
          <Image
            source={require("../assets/images/rider-profile.png")}
            className="w-14 h-14 rounded-2xl"
          />
          <View className="ml-4 flex-1">
            <Text className="text-base font-bold text-foundationBlack">
              Brooklyn Simmons
            </Text>
            <Text className="text-xs text-foundationGrey">
              Personal Courier
            </Text>
          </View>
          <TouchableOpacity className="border border-foundationSurface p-4 rounded-2xl">
            <Phone size={20} color="#A9A9A9" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// const mapStyle = [
//   { featureType: "poi", stylers: [{ visibility: "off" }] },
//   { featureType: "transit", stylers: [{ visibility: "off" }] },
// ];
