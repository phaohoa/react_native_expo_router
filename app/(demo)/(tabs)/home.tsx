// app/(demo)/(tabs)/home.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>🏠 Home Tab</Text>
        <Text style={styles.subtitle}>
          Custom floating tab bar design
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Floating Tab Bar</Text>
          <Text style={styles.cardText}>
            This tab bar floats above the content with a beautiful design,
            rounded corners, and smooth shadows.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Features</Text>
          <Text style={styles.cardText}>• Rounded, floating design</Text>
          <Text style={styles.cardText}>• Beautiful shadows</Text>
          <Text style={styles.cardText}>• Active state animations</Text>
          <Text style={styles.cardText}>• iOS-style appearance</Text>
          <Text style={styles.cardText}>• Smooth transitions</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>No Dependencies</Text>
          <Text style={styles.cardText}>
            This custom tab bar doesn't require any additional packages!
            It uses pure React Native components.
          </Text>
        </View>

        {/* Add some space at bottom for tab bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
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
    color: '#FF9500',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 5,
  },
  bottomSpacer: {
    height: 100, // Space for floating tab bar
  },
});