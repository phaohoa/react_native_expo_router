// app/(demo)/home.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function DemoHomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>📚 Demo Mode</Text>
                <Text style={styles.subtitle}>All Your Learning Examples</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phase 1: Basic Navigation</Text>

                    <Link href="/(demo)/about" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Go to About</Text>
                        </Pressable>
                    </Link>

                    <Link href="/(demo)/profile" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Go to Profile</Text>
                        </Pressable>
                    </Link>

                    <Link href="/(demo)/settings" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Go to Settings</Text>
                        </Pressable>
                    </Link>

                    <Link href="/(demo)/navigation-demo" asChild>
                        <Pressable>
                        <View style={[styles.button, { backgroundColor: '#34C759' }]}>
                            <Text style={styles.buttonText}>Navigation Methods Demo</Text>
                            </View>
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phase 1: Dynamic Routes</Text>

                    <Link href="/(demo)/users" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Users List (Dynamic Routes)</Text>
                        </Pressable>
                    </Link>

                    <Link href="/(demo)/products" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Products (Nested Dynamic)</Text>
                        </Pressable>
                    </Link>

                    <Link href="/(demo)/query-params-demo" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Query Params Demo</Text>
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phase 2: Navigation Patterns</Text>

                    <Link href="/(demo)/custom-header" asChild>
                        <Pressable >
                            <View style={[styles.button, { backgroundColor: '#FF3B30' }]}>
                                <Text style={styles.buttonText}>Custom Header Demo</Text>
                            </View>

                        </Pressable>
                    </Link>

                    <Link href="/(demo)/(tabs)/home" asChild>
                        <Pressable>
                            <View style={[styles.button, { backgroundColor: '#FF9500' }]}>
                                <Text style={styles.buttonText}>Tab Navigation Demo</Text>
                            </View>

                        </Pressable>
                    </Link>

                    <Link href="/(demo)/modal-demo" asChild>
                        <Pressable>
                            <View style={[styles.button, { backgroundColor: '#5856D6' }]}>
                                <Text style={styles.buttonText}>Modal Demo</Text>
                            </View>

                        </Pressable>
                    </Link>
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>💡 Learning Progress</Text>
                    <Text style={styles.infoText}>
                        You've completed Phase 1 & 2! All these examples demonstrate
                        the core concepts of Expo Router navigation.
                    </Text>
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    infoCard: {
        backgroundColor: '#E8F4FF',
        padding: 20,
        borderRadius: 15,
        marginTop: 10,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 22,
    },
});