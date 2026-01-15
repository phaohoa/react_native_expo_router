// app/components/CustomTabBar.tsx
import { View, Pressable, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Get icon name based on route
          let iconName: any = 'home';
          
          if (route.name === 'home') {
            iconName = isFocused ? 'home' : 'home-outline';
          } else if (route.name === 'search') {
            iconName = isFocused ? 'search' : 'search-outline';
          } else if (route.name === 'notifications') {
            iconName = isFocused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'account') {
            iconName = isFocused ? 'person' : 'person-outline';
          }

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
            >
              <View style={[
                styles.iconContainer,
                isFocused && styles.iconContainerActive
              ]}>
                <Ionicons
                  name={iconName}
                  size={24}
                  color={isFocused ? '#FF9500' : '#666'}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
  },
  iconContainerActive: {
    backgroundColor: 'rgba(255, 149, 0, 0.15)',
  },
});