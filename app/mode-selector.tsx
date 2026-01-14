// app/mode-selector.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ModeSelectorScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>🎓 Expo Router Learning</Text>
        <Text style={styles.subtitle}>Choose a mode to continue</Text>

        <View style={styles.modesContainer}>
          {/* Demo Mode - All Previous Examples */}
          <Link href="/(demo)/home" asChild>
            <Pressable style={[styles.modeCard, styles.demoCard]}>
              <View style={[styles.iconCircle, { backgroundColor: '#E8F4FF' }]}>
                <Ionicons name="school-outline" size={48} color="#007AFF" />
              </View>
              <Text style={styles.modeTitle}>📚 Demo Mode</Text>
              <Text style={styles.modeDescription}>
                All your previous learning examples:
              </Text>
              <View style={styles.featuresList}>
                <Text style={styles.feature}>• Basic Navigation</Text>
                <Text style={styles.feature}>• Dynamic Routes</Text>
                <Text style={styles.feature}>• Tab Navigation</Text>
                <Text style={styles.feature}>• Stack Navigation</Text>
                <Text style={styles.feature}>• Custom Headers</Text>
                <Text style={styles.feature}>• Modals</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Phase 1-2 Complete</Text>
              </View>
            </Pressable>
          </Link>

          {/* Auth Mode - Protected Routes */}
          <Link href="/(auth)/sign-in" asChild>
            <Pressable style={[styles.modeCard, styles.authCard]}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFE8F5' }]}>
                <Ionicons name="shield-checkmark-outline" size={48} color="#FF3B30" />
              </View>
              <Text style={styles.modeTitle}>🔐 Auth Mode</Text>
              <Text style={styles.modeDescription}>
                Protected Routes & Authentication:
              </Text>
              <View style={styles.featuresList}>
                <Text style={styles.feature}>• Authentication System</Text>
                <Text style={styles.feature}>• Protected Routes</Text>
                <Text style={styles.feature}>• Route Guards</Text>
                <Text style={styles.feature}>• Sign In / Sign Up</Text>
                <Text style={styles.feature}>• Auto Redirects</Text>
                <Text style={styles.feature}>• Session Management</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: '#FF3B30' }]}>
                <Text style={styles.badgeText}>Phase 3-4 Advanced</Text>
              </View>
            </Pressable>
          </Link>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={24} color="#007AFF" />
          <Text style={styles.infoText}>
            Both modes are fully functional. Switch between them anytime!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  modesContainer: {
    gap: 20,
    marginBottom: 30,
  },
  modeCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  demoCard: {
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  authCard: {
    borderWidth: 3,
    borderColor: '#FF3B30',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  modeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  modeDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  featuresList: {
    marginBottom: 20,
  },
  feature: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    paddingLeft: 10,
  },
  badge: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F4FF',
    padding: 15,
    borderRadius: 15,
    gap: 10,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#007AFF',
  },
});