import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "coffee" | "surface";
  containerStyles?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "coffee",
  containerStyles = "",
}) => {
  const baseStyles = "py-5 items-center justify-center shadow-md";

  const bgStyles = variant === "coffee" ? "bg-coffee" : "bg-foundationSurface";

  const textStyles =
    variant === "coffee" ? "text-foundationWhite" : "text-foundationBlack";

  return (
    <TouchableOpacity
      className={`${baseStyles} ${bgStyles} ${containerStyles}`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className={`${textStyles} text-[16px] font-semibold`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
