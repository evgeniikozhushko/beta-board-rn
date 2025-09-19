import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#412A5B'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home'}} />
      <Stack.Screen name='dashboard ' options={{ headerTitle: 'Dashboard'}} />
    </Stack>
  );
}

export default RootLayout;