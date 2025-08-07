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
  const renderItem = ({ item }: { item: Course }) => (
    <CourseItem name={item.name} image={item.image} bgColor={item.bgColor} />
  );

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
    marginTop: 20,
  },
  listContent: {
    paddingRight: 16,
  },
});

export default CourseList;
