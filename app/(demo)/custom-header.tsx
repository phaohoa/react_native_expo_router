// app/custom-header.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';

export default function CustomHeaderScreen() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Custom Header',
          headerStyle: {
            backgroundColor: '#FF3B30',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Pressable onPress={() => setCount(count + 1)}>
              <Text style={{ color: '#fff', marginRight: 15, fontSize: 16 }}>
                Count: {count}
              </Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Text style={{ color: '#fff', marginLeft: 15, fontSize: 16 }}>
                ← Back
              </Text>
            </Pressable>
          ),
        }}
      />
      
      <View style={styles.container}>
        <Text style={styles.title}>Custom Header Demo</Text>
        <Text style={styles.text}>
          This screen demonstrates custom header configuration
        </Text>
        <Text style={styles.count}>Button Count: {count}</Text>
        
        <Pressable 
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increment Count</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  count: {
    fontSize: 24,
    color: '#FF3B30',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});