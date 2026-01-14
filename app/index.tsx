// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Link } from 'expo-router';

import { Redirect } from "expo-router";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Expo Router! 🎉</Text>
//       <Text style={styles.subtitle}>Phase 1: Basic Navigation</Text>

//       <View style={styles.linksContainer}>
//         <Link href="/about" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Go to About</Text>
//           </Pressable>
//         </Link>

//         <Link href="/profile" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Go to Profile</Text>
//           </Pressable>
//         </Link>

//         <Link href="/settings" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Go to Settings</Text>
//           </Pressable>
//         </Link>

//         <Link href="/navigation-demo" asChild>
//           <Pressable >
//             <View style={[styles.button, { backgroundColor: "#34C759" }]}>
//               <Text style={styles.buttonText}>Navigation Demo</Text>
//             </View>
//           </Pressable>
//         </Link>

//         {/* Add these links to your existing home screen */}

//         <Link href="/users" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Users List (Dynamic Routes)</Text>
//           </Pressable>
//         </Link>

//         <Link href="/products" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Products (Nested Dynamic)</Text>
//           </Pressable>
//         </Link>

//         <Link href="/query-params-demo" asChild>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Query Params Demo</Text>
//           </Pressable>
//         </Link>

//         <Link href="/(tabs)/home" asChild>
//           <Pressable>
//             <View style={[styles.button, { backgroundColor: '#FF9500' }]}>
//               <Text style={styles.buttonText}>Open Tab Navigation Demo</Text>
//             </View>

//           </Pressable>
//         </Link>

//         <Link href="/custom-header" asChild>
//           <Pressable>
//             <View style={[styles.button, { backgroundColor: '#FF3B30' }]}>
//               <Text style={styles.buttonText}>Custom Header Demo</Text>
//             </View>
//           </Pressable>
//         </Link>

//         {/* // Add to app/index.tsx */}

//         <Link href="/drawer/home" asChild>
//           <Pressable style={[styles.button, { backgroundColor: '#5856D6' }]}>
//             <Text style={styles.buttonText}>Open Drawer Navigation</Text>
//           </Pressable>
//         </Link>

//         <Link href="/modal-demo" asChild>
//           <Pressable style={[styles.button, { backgroundColor: '#FF3B30' }]}>
//             <Text style={styles.buttonText}>Open Modal Demo</Text>
//           </Pressable>
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//   },
//   linksContainer: {
//     width: '100%',
//     maxWidth: 300,
//     gap: 15,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// app/index.tsx
// import { Redirect } from 'expo-router';
// import { useAuth } from './contexts/AuthContext';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';

// export default function Index() {
//   const { user, isLoading } = useAuth();

//   if (isLoading) {
//     return (
//       <View style={styles.loading}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   // Redirect based on authentication status
//   if (user) {
//     return <Redirect href="/(protected)/home" />;
//   }

//   return <Redirect href="/(auth)/sign-in" />;
// }

// const styles = StyleSheet.create({
//   loading: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default function Index() {
  // Always show mode selector first
  return <Redirect href="/mode-selector" />;
}