import { CoffeeCard } from "@/components/CoffeeCard";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  BellIcon,
  ChevronDown,
  Handbag,
  HeartIcon,
  HouseIcon,
  Search,
  SlidersHorizontal,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const categories = ["All Coffee", "Machiato", "Latte", "Americano"];

export const COFFEE_DATA = [
  {
    id: "1",
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: "4.53",
    rating: 4.8,
    image: require("../assets/images/coffee-1.png"),
  },
  {
    id: "2",
    name: "Flat White",
    description: "Espresso",
    price: "3.53",
    rating: 4.8,
    image: require("../assets/images/coffee-2.png"),
  },
  {
    id: "3",
    name: "Turkish Coffee",
    description: "Strong Aroma",
    price: "5.00",
    rating: 4.9,
    image: require("../assets/images/coffee-3.png"),
  },
  {
    id: "4",
    name: "Espresso",
    description: "Strong Aroma",
    price: "5.00",
    rating: 4.9,
    image: require("../assets/images/coffee-4.png"),
  },
  {
    id: "5",
    name: "Iced Latte",
    description: "Strong Aroma",
    price: "5.00",
    rating: 4.9,
    image: require("../assets/images/coffee-5.png"),
  },
  {
    id: "6",
    name: "Cappuccino",
    description: "Deep Foam",
    price: "5.00",
    rating: 4.9,
    image: require("../assets/images/coffee-6.png"),
  },
];

const COLORS = {
  coffee: "#C67C4E",
  foundationGrey: "#A9A9A9",
  foundationSurface: "#FFFFFF",
};

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedCategory, setSelectedCategory] = useState("All Coffee");

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header Section */}
        <View className="bg-[#313131] h-52">
          {" "}
          <LinearGradient
            colors={["#111111", "#313131"]}
            className="px-6 pt-16 pb-32"
          >
            <Text className="text-foundationGrey text-xs px-6 py-2">
              Location
            </Text>
            <TouchableOpacity className="flex-row items-center px-6 mt-1">
              <Text className="text-white font-semibold text-sm">
                Bilzen, Tanjungbalai
              </Text>
              <ChevronDown size={14} color="white" className="ml-8" />
            </TouchableOpacity>

            <View className="flex-row mt-6 items-center px-6">
              <View className="flex-1 bg-[#2A2A2A] flex-row items-center px-6 py-4 rounded-[12px]">
                <Search size={20} color="#A9A9A9" />
                <TextInput
                  placeholder="Search coffee"
                  placeholderTextColor="#A2A2A2"
                  className="ml-2 text-white flex-1"
                />
              </View>
              <TouchableOpacity className="bg-coffee px-4 py-4 rounded-[12px] ml-8">
                <SlidersHorizontal size={20} color="white" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <View className=" -mt-12 px-6">
          <Image
            source={require("../assets/images/Banner.png")}
            className="w-full h-32 rounded-xl"
            resizeMode="cover"
          />
        </View>

        {/* Categories */}
        <View className="mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                className={`px-4 py-2 rounded-xl mr-2 ${
                  selectedCategory === item ? "bg-coffee" : "bg-white"
                }`}
              >
                <Text
                  className={`font-semibold text-[14px] ${
                    selectedCategory === item ? "text-white" : "text-[#313131]"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Coffee Grid */}
        <View className="flex-row flex-wrap justify-between px-6 mt-6 pb-32">
          {COFFEE_DATA.map((item) => (
            <CoffeeCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
              image={item.image}
              onPress={() =>
                router.push({
                  pathname: "/details/[id]",
                  params: {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    rating: item.rating.toString(),
                    image: String(item.image),
                  },
                })
              }
            />
          ))}
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white flex-row justify-around pt-4 pb-8 border-t border-gray-100 rounded-t-[30px] shadow-2xl">
        <TabItem
          icon={HouseIcon}
          label="Home"
          active={activeTab}
          onPress={setActiveTab}
        />
        <TabItem
          icon={HeartIcon}
          label="Favorites"
          active={activeTab}
          onPress={setActiveTab}
        />
        <TabItem
          icon={Handbag}
          label="Cart"
          active={activeTab}
          onPress={setActiveTab}
        />
        <TabItem
          icon={BellIcon}
          label="Notifications"
          active={activeTab}
          onPress={setActiveTab}
        />
      </View>
    </View>
  );
}

const TabItem = ({ icon: Icon, label, active, onPress }: any) => {
  const isActive = active === label;
  return (
    <TouchableOpacity onPress={() => onPress(label)} className="items-center">
      <Icon
        size={24}
        color={isActive ? COLORS.coffee : COLORS.foundationGrey}
      />
      {isActive && <View className="h-1 w-2 bg-coffee rounded-full mt-1" />}
    </TouchableOpacity>
  );
};
