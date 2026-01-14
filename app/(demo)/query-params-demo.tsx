// app/query-params-demo.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function QueryParamsDemoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Parameters Demo</Text>
      
      {/* Using Link with href object */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 1: Link with Object</Text>
        <Link 
          href={{
            pathname: '/post/[id]',
            params: { 
              id: '123', 
              title: 'My First Post',
              author: 'John Doe',
              likes: '42'
            }
          }} 
          asChild
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>View Post (Link)</Text>
          </Pressable>
        </Link>
      </View>

      {/* Using router.push with params */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 2: router.push with Object</Text>
        <Pressable 
          style={styles.button}
          onPress={() => {
            router.push({
              pathname: '/post/[id]',
              params: {
                id: '456',
                title: 'Advanced Expo Router',
                author: 'Jane Smith',
                likes: '128'
              }
            });
          }}
        >
          <Text style={styles.buttonText}>View Post (Push)</Text>
        </Pressable>
      </View>

      {/* Using query string */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 3: Query String</Text>
        <Link 
          href="/post/789?title=Query String Post&author=Bob&likes=99" 
          asChild
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>View Post (Query String)</Text>
          </Pressable>
        </Link>
      </View>
      
      <Pressable 
        style={styles.backButton}
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});