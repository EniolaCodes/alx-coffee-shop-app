import { Bike, Target } from "lucide-react-native";
import React from "react";
import { Dimensions, View } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

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
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ width: width, height: height * 0.6 }}
      initialRegion={region}
    >
      <Marker coordinate={deliveryRoute[0]}>
        <View className="bg-white p-2 rounded-xl shadow-md">
          <View className="bg-coffee p-1 rounded-lg">
            <Target size={16} color="white" />
          </View>
        </View>
      </Marker>

      <Marker coordinate={deliveryRoute[deliveryRoute.length - 1]}>
        <View className="bg-white p-2 rounded-full shadow-md border-2 border-coffee">
          <Bike size={24} color="#C67C4E" />
        </View>
      </Marker>

      <Polyline
        coordinates={deliveryRoute}
        strokeColor="#C67C4E"
        strokeWidth={5}
      />
    </MapView>
  );
}
