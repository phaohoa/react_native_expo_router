// app/users/[id].tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function UserDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Detail</Text>
      <Text style={styles.userId}>User ID: {id}</Text>
      <Text style={styles.info}>
        This page dynamically loads based on the URL parameter
      </Text>
      
      <Pressable 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </Pressable>
    </View>
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
  userId: {
    fontSize: 20,
    color: '#007AFF',
    marginBottom: 10,
    fontWeight: '600',
  },
  info: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#666',
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