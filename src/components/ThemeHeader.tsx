import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { iconRegistry, icons } from '../assets';
import { FontFamily } from '../assets/fonts/fonts.ts';

interface ThemeHeaderProps {
  theme: string | null;
  onPress: () => void;
}

const ThemeHeader: React.FC<ThemeHeaderProps> = memo(({ theme, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.button}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{theme || 'Все темы'}</Text>
        <View style={styles.arrowContainer}>
          <Image source={iconRegistry[icons.pointer]} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: { position: 'absolute', top: 12, zIndex: 2 },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 40,
    paddingLeft: 10,
    paddingRight: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 3,
    fontFamily: FontFamily.nunitoExtraBold,
  },
  arrowContainer: {
    width: 18,
    height: 18,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 10, resizeMode: 'center' },
});

export default ThemeHeader;
