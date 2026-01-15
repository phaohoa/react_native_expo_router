// app/(admin)/users.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useAuth, Permission } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'USER', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'ADMIN', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'USER', status: 'Inactive' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'USER', status: 'Active' },
];

export default function AdminUsersScreen() {
  const { hasPermission } = useAuth();
  const router = useRouter();

  // Check permission
  if (!hasPermission(Permission.MANAGE_USERS)) {
    return (
      <View style={styles.noAccessContainer}>
        <Ionicons name="lock-closed" size={64} color="#FF3B30" />
        <Text style={styles.noAccessTitle}>Access Denied</Text>
        <Text style={styles.noAccessText}>
          You don't have permission to manage users.
        </Text>
        <Pressable 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>User Management</Text>
          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={20} color="#fff" />
            <Text style={styles.addButtonText}>Add User</Text>
          </Pressable>
        </View>

        <View style={styles.usersList}>
          {mockUsers.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <View style={styles.userAvatar}>
                <Ionicons name="person" size={24} color="#007AFF" />
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <View style={styles.userMeta}>
                  <View style={[styles.roleBadge, user.role === 'ADMIN' && styles.adminBadge]}>
                    <Text style={styles.roleText}>{user.role}</Text>
                  </View>
                  <View style={[
                    styles.statusBadge,
                    user.status === 'Active' ? styles.activeStatus : styles.inactiveStatus
                  ]}>
                    <Text style={styles.statusText}>{user.status}</Text>
                  </View>
                </View>
              </View>
              <Pressable style={styles.actionButton}>
                <Ionicons name="ellipsis-vertical" size={20} color="#666" />
              </Pressable>
            </View>
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  usersList: {
    gap: 12,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  userMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  roleBadge: {
    backgroundColor: '#E8F4FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  adminBadge: {
    backgroundColor: '#FFE8F5',
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  activeStatus: {
    backgroundColor: '#E8FAF0',
  },
  inactiveStatus: {
    backgroundColor: '#F0F0F0',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#34C759',
  },
  actionButton: {
    padding: 8,
  },
  noAccessContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  noAccessTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#FF3B30',
  },
  noAccessText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});