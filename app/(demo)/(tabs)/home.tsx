// app/(tabs)/home.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeTab() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🏠 Home Tab</Text>
        <Text style={styles.subtitle}>
          Welcome to the tab navigation demo
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>What are Tabs?</Text>
          <Text style={styles.cardText}>
            Tab navigation allows users to quickly switch between different
            sections of your app. It's perfect for apps with 3-5 main sections.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Key Features</Text>
          <Text style={styles.cardText}>• Easy navigation between screens</Text>
          <Text style={styles.cardText}>• Persistent tab bar at the bottom</Text>
          <Text style={styles.cardText}>• Icons and badges support</Text>
          <Text style={styles.cardText}>• Customizable styling</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 5,
  },
});