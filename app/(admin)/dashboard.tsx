// app/(admin)/dashboard.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useAuth, UserRole, Permission } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function AdminDashboardScreen() {
  const { user, hasPermission, hasRole } = useAuth();

  const adminCards = [
    {
      title: 'Manage Users',
      description: 'Add, edit, or remove users',
      icon: 'people' as const,
      color: '#007AFF',
      route: '/(admin)/users',
      permission: Permission.MANAGE_USERS,
    },
    {
      title: 'Analytics',
      description: 'View system analytics',
      icon: 'stats-chart' as const,
      color: '#34C759',
      route: '/(admin)/analytics',
      permission: Permission.VIEW_ANALYTICS,
    },
    {
      title: 'Admin Settings',
      description: 'Configure system settings',
      icon: 'settings' as const,
      color: '#FF9500',
      route: '/(admin)/settings',
      permission: Permission.VIEW_ADMIN,
    },
  ];

  const stats = [
    { label: 'Total Users', value: '1,234', icon: 'people-outline' as const, color: '#007AFF' },
    { label: 'Active Sessions', value: '567', icon: 'pulse-outline' as const, color: '#34C759' },
    { label: 'System Health', value: '98%', icon: 'heart-outline' as const, color: '#FF3B30' },
    { label: 'Requests/min', value: '432', icon: 'flash-outline' as const, color: '#FF9500' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome, {user?.name}! 👋</Text>
          <Text style={styles.welcomeSubtitle}>
            Role: <Text style={styles.roleText}>{user?.role.toUpperCase()}</Text>
          </Text>
          <Text style={styles.welcomeEmail}>{user?.email}</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                <Ionicons name={stat.icon} size={24} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Admin Actions */}
        <Text style={styles.sectionTitle}>Admin Actions</Text>
        <View style={styles.actionsGrid}>
          {adminCards.map((card, index) => {
            const hasAccess = hasPermission(card.permission);
            
            return (
              <Link 
                key={index} 
                href={hasAccess ? card.route : '/(admin)/dashboard'} 
                asChild
              >
                <Pressable 
                  style={[
                    styles.actionCard,
                    !hasAccess && styles.actionCardDisabled
                  ]}
                  disabled={!hasAccess}
                >
                  <View style={[styles.actionIcon, { backgroundColor: card.color + '20' }]}>
                    <Ionicons name={card.icon} size={32} color={card.color} />
                  </View>
                  <Text style={styles.actionTitle}>{card.title}</Text>
                  <Text style={styles.actionDescription}>{card.description}</Text>
                  {!hasAccess && (
                    <View style={styles.lockedBadge}>
                      <Ionicons name="lock-closed" size={12} color="#666" />
                      <Text style={styles.lockedText}>No Permission</Text>
                    </View>
                  )}
                </Pressable>
              </Link>
            );
          })}
        </View>

        {/* Permissions Info */}
        <View style={styles.permissionsCard}>
          <View style={styles.permissionsHeader}>
            <Ionicons name="shield-checkmark" size={24} color="#007AFF" />
            <Text style={styles.permissionsTitle}>Your Permissions</Text>
          </View>
          <View style={styles.permissionsList}>
            {user?.permissions.map((permission, index) => (
              <View key={index} style={styles.permissionItem}>
                <Ionicons name="checkmark-circle" size={16} color="#34C759" />
                <Text style={styles.permissionText}>
                  {permission.replace(/_/g, ' ').toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Role Info */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={24} color="#FF3B30" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Admin Panel Access</Text>
            <Text style={styles.infoText}>
              You have {user?.role === UserRole.SUPER_ADMIN ? 'FULL' : 'LIMITED'} admin access.
              {user?.role !== UserRole.SUPER_ADMIN && ' Some features may be restricted.'}
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
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
  welcomeCard: {
    backgroundColor: '#FF3B30',
    padding: 25,
    borderRadius: 15,
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 4,
  },
  roleText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeEmail: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  actionsGrid: {
    gap: 15,
    marginBottom: 25,
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionCardDisabled: {
    opacity: 0.5,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    flex: 1,
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  lockedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  lockedText: {
    fontSize: 11,
    color: '#666',
    fontWeight: '600',
  },
  permissionsCard: {
    backgroundColor: '#E8F4FF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  permissionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  permissionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  permissionsList: {
    gap: 10,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  permissionText: {
    fontSize: 14,
    color: '#333',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFE8E8',
    padding: 15,
    borderRadius: 15,
    gap: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 20,
  },
});