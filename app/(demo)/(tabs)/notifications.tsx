// app/(tabs)/notifications.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const notifications = [
  { id: 1, title: 'New message', message: 'You have a new message from John', time: '2m ago' },
  { id: 2, title: 'Update available', message: 'A new version is available', time: '1h ago' },
  { id: 3, title: 'Reminder', message: 'Meeting at 3 PM today', time: '3h ago' },
];

export default function NotificationsTab() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <Text style={styles.badge}>3 new notifications</Text>
      
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationCard}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
        </View>
      ))}
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  badge: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 14,
    color: '#999',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#666',
  },
});