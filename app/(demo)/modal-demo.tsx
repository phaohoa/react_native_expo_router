// app/modal-demo.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function ModalDemoScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          presentation: 'modal',
          title: 'Modal Screen',
          headerStyle: {
            backgroundColor: '#FF3B30',
          },
          headerTintColor: '#fff',
        }}
      />
      
      <View style={styles.container}>
        <Text style={styles.title}>🎭 Modal Presentation</Text>
        <Text style={styles.text}>
          This screen is presented as a modal
        </Text>
        <Text style={styles.info}>
          Modals slide up from the bottom on iOS and appear as overlays
        </Text>
        
        <Pressable 
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Close Modal</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});