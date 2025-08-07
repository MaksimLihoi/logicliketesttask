import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface CourseItemProps {
  name: string;
  image: string;
  bgColor: string;
}

const CourseItem: React.FC<CourseItemProps> = memo(
  ({ name, image, bgColor }) => {
    return (
      <View style={[styles.container, styles.boxShadow]}>
        <View style={[styles.imageContainer, { backgroundColor: bgColor }]}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: 210,
    height: 198,
    borderRadius: 24,
    marginRight: 16,
    backgroundColor: '#fff',
  },
  boxShadow: {
    shadowColor: '#E5E8FE',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  imageContainer: {
    paddingVertical: 9,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  image: {
    width: 144,
    height: 144,
    alignSelf: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5A5776',
  },
  footerContainer: {
    backgroundColor: '#fff',
  },
});

export default CourseItem;
