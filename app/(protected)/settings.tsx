// app/(protected)/settings.tsx
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ProtectedSettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security Settings</Text>
        
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="shield-outline" size={24} color="#007AFF" />
            <View>
              <Text style={styles.settingTitle}>Two-Factor Auth</Text>
              <Text style={styles.settingDesc}>Extra security layer</Text>
            </View>
          </View>
          <Switch value={twoFactor} onValueChange={setTwoFactor} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={24} color="#007AFF" />
            <View>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingDesc}>Receive push alerts</Text>
            </View>
          </View>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="mail-outline" size={24} color="#007AFF" />
            <View>
              <Text style={styles.settingTitle}>Email Updates</Text>
              <Text style={styles.settingDesc}>Weekly email digest</Text>
            </View>
          </View>
          <Switch value={emailUpdates} onValueChange={setEmailUpdates} />
        </View>
      </View>

      <View style={styles.protectedInfo}>
        <Ionicons name="lock-closed" size={20} color="#007AFF" />
        <Text style={styles.protectedText}>
          Protected Settings - Authentication Required
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  settingDesc: {
    fontSize: 13,
    color: '#666',
  },
  protectedInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#E8F4FF',
    margin: 20,
    padding: 15,
    borderRadius: 15,
  },
  protectedText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});