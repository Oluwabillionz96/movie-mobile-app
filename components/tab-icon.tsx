import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const TabIcon = ({
  title,
  focused,
  icon,
}: {
  title: string;
  focused: boolean;
  icon: ImageSourcePropType;
}) => {
  if (!focused) {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor={"#a8b5db"} className="size-5" />
      </View>
    );
  }
  return (
    <ImageBackground
      source={images.highlight}
      className="flex w-full flex-row flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor={"#151312"} className="size-5" />
      <Text className="text-secondary text-base font-semibold  ml-2">
        {title}
      </Text>
    </ImageBackground>
  );
};

export default TabIcon;
