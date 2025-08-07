import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ThemeHeaderProps {
  theme: string | null;
  onPress: () => void;
}

const ThemeHeader: React.FC<ThemeHeaderProps> = memo(({ theme, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.title}>{theme || 'Все темы'}</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>▼</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
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
  },
  arrowContainer: {
    width: 18,
    height: 18,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 12,
    color: '#fff',
  },
});

export default ThemeHeader;
