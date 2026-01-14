// app/products/index.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

const products = [
  { id: 'laptop-001', name: 'MacBook Pro', category: 'electronics' },
  { id: 'phone-002', name: 'iPhone 15', category: 'electronics' },
  { id: 'shirt-003', name: 'Cotton T-Shirt', category: 'clothing' },
  { id: 'book-004', name: 'Learn React Native', category: 'books' },
  { id: 'chair-005', name: 'Office Chair', category: 'furniture' },
];

export default function ProductsListScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Products Catalog</Text>
      <Text style={styles.subtitle}>
        Each product has a category and ID in the URL
      </Text>
      
      <View style={styles.productsList}>
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.category}/${product.id}`} 
            asChild
          >
            <Pressable style={styles.productCard}>
              <View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productCategory}>
                  Category: {product.category}
                </Text>
              </View>
              <Text style={styles.arrow}>→</Text>
            </Pressable>
          </Link>
        ))}
      </View>

      <Pressable 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Back to Home</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  productsList: {
    gap: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#007AFF',
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
  backButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});