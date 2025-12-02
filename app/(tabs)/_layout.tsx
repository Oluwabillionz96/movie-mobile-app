import TabIcon from "@/components/tab-icon";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React, { ReactNode } from "react";

const tabScreens: {
  name: string;
  options: {
    title: string;
    headerShown: boolean;
    tabBarIcon: (arg: { focused: boolean }) => ReactNode;
  };
}[] = [
  {
    name: "index",
    options: {
      title: "Home",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon title="Home" focused={focused} icon={icons.home} />
      ),
    },
  },
  {
    name: "search",
    options: {
      title: "Search",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon title="Search" focused={focused} icon={icons.search} />
      ),
    },
  },
  {
    name: "saved",
    options: {
      title: "Saved",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon title="Saved" focused={focused} icon={icons.save} />
      ),
    },
  },
  {
    name: "profile",
    options: {
      title: "Profile",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon title="Profile" focused={focused} icon={icons.person} />
      ),
    },
  },
];

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      {tabScreens.map((item, index) => (
        <Tabs.Screen key={index} {...item} />
      ))}
    </Tabs>
  );
};

export default _layout;
