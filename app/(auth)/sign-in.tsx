// app/(auth)/sign-in.tsx
import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth, UserRole } from '../contexts/AuthContext';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.USER);
  const { signIn, isLoading } = useAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await signIn(email, password, selectedRole);
    } catch (error) {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const roles = [
    { 
      role: UserRole.USER, 
      label: 'Regular User', 
      icon: 'person' as const,
      description: 'Basic access',
      color: '#007AFF'
    },
    { 
      role: UserRole.ADMIN, 
      label: 'Admin', 
      icon: 'shield' as const,
      description: 'Admin privileges',
      color: '#FF9500'
    },
    { 
      role: UserRole.SUPER_ADMIN, 
      label: 'Super Admin', 
      icon: 'shield-checkmark' as const,
      description: 'Full access',
      color: '#FF3B30'
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>🔐 Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            {/* Role Selection */}
            <View style={styles.roleSection}>
              <Text style={styles.roleSectionTitle}>Select Role (Demo):</Text>
              <View style={styles.rolesContainer}>
                {roles.map((roleItem) => (
                  <Pressable
                    key={roleItem.role}
                    style={[
                      styles.roleCard,
                      selectedRole === roleItem.role && styles.roleCardActive,
                      { borderColor: roleItem.color }
                    ]}
                    onPress={() => setSelectedRole(roleItem.role)}
                  >
                    <View style={[styles.roleIcon, { backgroundColor: roleItem.color + '20' }]}>
                      <Ionicons name={roleItem.icon} size={24} color={roleItem.color} />
                    </View>
                    <Text style={styles.roleLabel}>{roleItem.label}</Text>
                    <Text style={styles.roleDescription}>{roleItem.description}</Text>
                    {selectedRole === roleItem.role && (
                      <View style={[styles.selectedBadge, { backgroundColor: roleItem.color }]}>
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      </View>
                    )}
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!isLoading}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!isLoading}
              />

              <Pressable 
                style={[styles.button, isLoading && styles.buttonDisabled]}
                onPress={handleSignIn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign In as {roles.find(r => r.role === selectedRole)?.label}</Text>
                )}
              </Pressable>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <Link href="/(auth)/sign-up" asChild>
                  <Pressable>
                    <Text style={styles.link}>Sign Up</Text>
                  </Pressable>
                </Link>
              </View>
            </View>

            <View style={styles.demoInfo}>
              <Text style={styles.demoTitle}>Demo Mode:</Text>
              <Text style={styles.demoText}>• Use any email/password</Text>
              <Text style={styles.demoText}>• Select different roles to see access levels</Text>
              <Text style={styles.demoText}>• Admin/Super Admin get admin panel access</Text>
            </View>

            <Pressable 
              style={styles.backToModes}
              onPress={() => router.push('/mode-selector')}
            >
              <Ionicons name="apps-outline" size={18} color="#666" />
              <Text style={styles.backToModesText}>Back to Mode Selector</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignSelf: 'center',
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
    marginBottom: 25,
    textAlign: 'center',
  },
  roleSection: {
    marginBottom: 25,
  },
  roleSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  rolesContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  roleCard: {
    flex: 1,
    minWidth: 140,
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    position: 'relative',
  },
  roleCardActive: {
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  roleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  roleLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  roleDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  selectedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  demoInfo: {
    backgroundColor: '#E8F4FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  demoText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  backToModes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  backToModesText: {
    fontSize: 14,
    color: '#666',
  },
});