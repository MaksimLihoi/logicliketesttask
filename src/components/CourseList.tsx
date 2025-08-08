import React, { memo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CourseItem from './CourseItem';

interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = memo(({ courses }) => {
  const renderItem = ({ item }: { item: Course }) => {
    return (
      <CourseItem name={item.name} image={item.image} bgColor={item.bgColor} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },
});

export default CourseList;
