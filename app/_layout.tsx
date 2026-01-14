// app/_layout.tsx
import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { AuthProvider } from './contexts/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
       screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(protected)" />

        <Stack.Screen name="mode-selector" />
        <Stack.Screen name="(demo)" />
      </Stack>
    </AuthProvider>
    // <Stack
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#007AFF',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}
    // >
    //   <Stack.Screen 
    //     name="index" 
    //     options={{
    //       title: 'Home',
    //       headerStyle: {
    //         backgroundColor: '#34C759',
    //       },
    //     }}
    //   />
    //   <Stack.Screen 
    //     name="about" 
    //     options={{
    //       title: 'About Us',
    //     }}
    //   />
    //   <Stack.Screen 
    //     name="profile" 
    //     options={{
    //       title: 'User Profile',
    //       headerRight: () => (
    //         <Pressable onPress={() => alert('Edit Profile')}>
    //           <Text style={{ color: '#fff', marginRight: 15 }}>Edit</Text>
    //         </Pressable>
    //       ),
    //     }}
    //   />
    //   <Stack.Screen 
    //     name="settings" 
    //     options={{
    //       title: 'Settings',
    //       presentation: 'modal',
    //     }}
    //   />
    // </Stack>
  );
}