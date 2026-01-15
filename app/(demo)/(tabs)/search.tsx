// app/(demo)/(tabs)/search.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SearchTab() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🔍 Search</Text>
        <Text style={styles.subtitle}>Search content here</Text>
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
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  bottomSpacer: {
    height: 100,
  },
});