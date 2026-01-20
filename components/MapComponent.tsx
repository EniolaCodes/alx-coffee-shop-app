import React from "react";
import { Text, View } from "react-native";

interface MapProps {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  deliveryRoute: {
    latitude: number;
    longitude: number;
  }[];
}

export default function MapComponent({ region, deliveryRoute }: MapProps) {
  return (
    <View
      className="flex-1 items-center justify-center text-xs text-foundationGrey bg-foundationSurface"
      style={{ height: 350 }}
    >
      <Text className="">Map View not supported on Web</Text>
      <Text className="mt-2">Open on a mobile device to see tracking</Text>
    </View>
  );
}
