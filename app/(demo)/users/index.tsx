// app/users/index.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Bob Johnson' },
  { id: '4', name: 'Alice Williams' },
  { id: '5', name: 'Charlie Brown' },
];

export default function UsersListScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <Text style={styles.subtitle}>Tap on a user to see their details</Text>
      
      <View style={styles.usersList}>
        {users.map((user) => (
          <Link 
            key={user.id} 
            href={`/users/${user.id}`} 
            asChild
          >
            <Pressable style={styles.userCard}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userId}>ID: {user.id}</Text>
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
  usersList: {
    gap: 10,
  },
  userCard: {
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
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  userId: {
    fontSize: 14,
    color: '#007AFF',
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