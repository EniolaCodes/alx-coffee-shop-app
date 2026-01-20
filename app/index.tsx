import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ImageBackground, StatusBar, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../assets/images/coffee-1.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <LinearGradient
          // colors={["transparent", "rgba(5,5,5,0)", "rgba(5,5,5,1)"]}
          colors={["transparent", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.85)"]}
          className="flex-1 justify-self-end p-8"
        ></LinearGradient>
        <View className="px-8 pb-32">
          <Text className="text-foundationWhite text-[32px] font-semibold text-center">
            Fall in Love with Coffee in Blissful Delight!
          </Text>

          <Text className="text-foundationGrey text-center mt-4 text-[14px] px-2">
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>

          <View className="w-full mt-10">
            <CustomButton
              title="Get Started"
              onPress={() => router.push("/home")}
              containerStyles="w-full rounded-full"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
