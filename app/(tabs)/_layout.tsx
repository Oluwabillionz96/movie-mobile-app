import { Tabs } from "expo-router";
import React from "react";

const tabScreens = [
  { name: "index", options: { title: "Home", headerShown: false } },
  { name: "search", options: { title: "Search", headerShown: false } },
  { name: "saved", options: { title: "Saved", headerShown: false } },
  { name: "profile", options: { title: "Profile", headerShown: false } },
];

const _layout = () => {
  return (
    <Tabs>
      {tabScreens.map((item, index) => (
        <Tabs.Screen key={index} {...item} />
      ))}
    </Tabs>
  );
};

export default _layout;
