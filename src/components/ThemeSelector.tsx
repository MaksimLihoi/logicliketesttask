import React, { memo } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ThemeSelectorProps {
  visible: boolean;
  themes: string[];
  selectedTheme: string | null;
  onSelect: (theme: string | null) => void;
  onClose: () => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = memo(
  ({ visible, themes, selectedTheme, onSelect, onClose }) => {
    const renderItem = ({ item }: { item: string }) => (
      <TouchableOpacity
        onPress={() => onSelect(item === selectedTheme ? null : item)}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.themeItem,
            item === selectedTheme && styles.selectedTheme,
          ]}
        >
          <Text
            style={[
              styles.themeText,
              item === selectedTheme && styles.selectedText,
            ]}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={false}
        onRequestClose={onClose}
        supportedOrientations={['landscape']}
      >
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Выбор темы</Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>

          <FlatList
            data={themes}
            renderItem={renderItem}
            keyExtractor={item => item}
            contentContainerStyle={styles.listContent}
            ListHeaderComponent={
              <TouchableOpacity
                onPress={() => onSelect(null)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.themeItem,
                    !selectedTheme && styles.selectedTheme,
                  ]}
                >
                  <Text
                    style={[
                      styles.themeText,
                      selectedTheme && styles.selectedText,
                    ]}
                  >
                    Все темы
                  </Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 22,
    color: 'rgba(0, 0, 0, 1)',
  },
  listContent: {
    paddingBottom: 20,
    width: 336,
  },
  themeItem: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C5D0E6',
    height: 48,
    marginBottom: 6,
  },
  selectedTheme: {
    backgroundColor: '#5CBB73',
    borderColor: '#5CBB73',
  },
  themeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#39414B',
  },
  selectedText: {
    color: '#fff',
  },
});

export default ThemeSelector;
