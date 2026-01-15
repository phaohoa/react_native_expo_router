// app/(demo)/(tabs)/notifications.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function NotificationsTab() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🔔 Notifications</Text>
        <Text style={styles.subtitle}>No new notifications</Text>
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