// app/(admin)/_layout.tsx
import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminLayout() {
  const { signOut, user } = useAuth();
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF3B30',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Pressable 
            onPress={() => {
              signOut();
              router.push('/mode-selector');
            }}
            style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <Ionicons name="apps-outline" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16 }}>Modes</Text>
          </Pressable>
        ),
        headerRight: () => (
          <View style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              paddingHorizontal: 10, 
              paddingVertical: 5, 
              borderRadius: 12 
            }}>
              <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
                {user?.role.toUpperCase()}
              </Text>
            </View>
            <Pressable 
              onPress={signOut}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Ionicons name="log-out-outline" size={20} color="#fff" />
              <Text style={{ color: '#fff', fontSize: 16 }}>Logout</Text>
            </Pressable>
          </View>
        ),
      }}
    >
      <Stack.Screen 
        name="dashboard" 
        options={{ title: 'Admin Dashboard' }} 
      />
      <Stack.Screen 
        name="users" 
        options={{ title: 'Manage Users' }} 
      />
      <Stack.Screen 
        name="analytics" 
        options={{ title: 'Analytics' }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ title: 'Admin Settings' }} 
      />
    </Stack>
  );
}