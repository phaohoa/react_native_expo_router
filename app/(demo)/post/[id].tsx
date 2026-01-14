// app/post/[id].tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function PostScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  // Extract all parameters
  const { id, title, author, likes } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Details</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Post ID:</Text>
        <Text style={styles.value}>{id}</Text>
      </View>

      {title && (
        <View style={styles.card}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>{title}</Text>
        </View>
      )}

      {author && (
        <View style={styles.card}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.value}>{author}</Text>
        </View>
      )}

      {likes && (
        <View style={styles.card}>
          <Text style={styles.label}>Likes:</Text>
          <Text style={styles.value}>{likes}</Text>
        </View>
      )}
      
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
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  button: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});