// app/(protected)/home.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "@/app/contexts/AuthContext"

export default function ProtectedHomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcome}>Welcome back! 👋</Text>
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>🔒 Protected Content</Text>
        <Text style={styles.info}>
          This content is only visible to authenticated users. 
          Try logging out and you'll be redirected to the sign-in page.
        </Text>

        <View style={styles.cardsContainer}>
          <Link href="/(protected)/profile" asChild>
            <Pressable style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8F4FF' }]}>
                <Ionicons name="person-outline" size={32} color="#007AFF" />
              </View>
              <Text style={styles.cardTitle}>Profile</Text>
              <Text style={styles.cardDesc}>View your profile</Text>
            </Pressable>
          </Link>

          <Link href="/(protected)/settings" asChild>
            <Pressable style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFE8F5' }]}>
                <Ionicons name="settings-outline" size={32} color="#FF3B30" />
              </View>
              <Text style={styles.cardTitle}>Settings</Text>
              <Text style={styles.cardDesc}>Manage settings</Text>
            </Pressable>
          </Link>

          <Link href="/(protected)/admin" asChild>
            <Pressable style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFF5E8' }]}>
                <Ionicons name="shield-outline" size={32} color="#FF9500" />
              </View>
              <Text style={styles.cardTitle}>Admin Panel</Text>
              <Text style={styles.cardDesc}>Admin only area</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={24} color="#007AFF" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Authentication Demo</Text>
            <Text style={styles.infoText}>
              • All routes in (protected) group require authentication
            </Text>
            <Text style={styles.infoText}>
              • Unauthenticated users are redirected to sign-in
            </Text>
            <Text style={styles.infoText}>
              • Try the logout button to test the protection
            </Text>
          </View>
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
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  welcomeCard: {
    backgroundColor: '#007AFF',
    padding: 25,
    borderRadius: 15,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#E8F4FF',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    lineHeight: 24,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '47%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#E8F4FF',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});