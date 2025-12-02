import { Stack } from "expo-router";
import "./globals.css";

const pageSetups = [
  { name: "(tabs)", options: { headerShown: false } },
  { name: "movie/[id]", options: { headerShown: false } },
];

export default function RootLayout() {
  return (
    <Stack>
      {pageSetups.map((item, index) => (
        <Stack.Screen key={index} {...item} />
      ))}
    </Stack>
  );
}
