import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function NavigationDemoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation Methods Demo</Text>
      
      {/* Method 1: Using Link component */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 1: Link Component</Text>
        <Link href="/profile" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Link to Profile</Text>
          </Pressable>
        </Link>
      </View>

      {/* Method 2: Using router.push */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 2: router.push()</Text>
        <Pressable 
          style={styles.button}
          onPress={() => router.push('/about')}
        >
          <Text style={styles.buttonText}>Push to About</Text>
        </Pressable>
      </View>

      {/* Method 3: Using router.replace */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 3: router.replace()</Text>
        <Pressable 
          style={[styles.button, styles.replaceButton]}
          onPress={() => router.replace('/settings')}
        >
          <Text style={styles.buttonText}>Replace with Settings</Text>
        </Pressable>
        <Text style={styles.note}>
          (Can't go back after replace)
        </Text>
      </View>

      {/* Method 4: Going back */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 4: router.back()</Text>
        <Pressable 
          style={[styles.button, styles.backButton]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>← Go Back</Text>
        </Pressable>
      </View>
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
  replaceButton: {
    backgroundColor: '#FF9500',
  },
  backButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    fontStyle: 'italic',
  },
});