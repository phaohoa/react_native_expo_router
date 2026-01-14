// app/products/[category]/[id].tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProductDetailScreen() {
  const { category, id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{category}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Product ID:</Text>
        <Text style={styles.value}>{id}</Text>
      </View>

      <Text style={styles.note}>
        URL: /products/{category}/{id}
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
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
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
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
  },
  note: {
    fontSize: 12,
    color: '#999',
    marginTop: 20,
    marginBottom: 30,
    fontStyle: 'italic',
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