// app/(demo)/_layout.tsx
import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DemoLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Pressable 
            onPress={() => router.push('/mode-selector')}
            style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <Ionicons name="apps-outline" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16 }}>Modes</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen 
        name="home" 
        options={{ 
          title: 'Demo Home',
        }} 
      />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="navigation-demo" options={{ title: 'Navigation Demo' }} />
      <Stack.Screen name="custom-header" options={{ title: 'Custom Header' }} />
      <Stack.Screen name="modal-demo" options={{ title: 'Modal Demo', presentation: 'modal' }} />
      <Stack.Screen name="users" options={{ title: 'Users' }} />
      <Stack.Screen name="products" options={{ title: 'Products' }} />
      <Stack.Screen name="post/[id]" options={{ title: 'Post' }} />
      <Stack.Screen name="query-params-demo" options={{ title: 'Query Params' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}