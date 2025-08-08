import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CourseList from './src/components/CourseList';
import ThemeHeader from './src/components/ThemeHeader';
import ThemeSelector from './src/components/ThemeSelector';
import AppStatusBar from './src/components/AppStatusBar.tsx';
import axios from 'axios';

interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: string[];
}

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          'https://logiclike.com/docs/courses.json',
        );

        const data = await response.data;
        console.log('Courses fetched:', data);
        setCourses(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch courses');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const allThemes = useMemo(() => {
    return Array.from(new Set(courses.flatMap(course => course.tags))).sort();
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (!selectedTheme) return courses;
    return courses.filter(course => course.tags.includes(selectedTheme));
  }, [courses, selectedTheme]);

  const handleThemeSelect = useCallback((theme: string | null) => {
    setSelectedTheme(theme);
    setShowThemeSelector(false);
  }, []);

  const toggleThemeSelector = useCallback(() => {
    setShowThemeSelector(prev => !prev);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppStatusBar translucent barStyle="dark-content" />
      <ThemeHeader theme={selectedTheme} onPress={toggleThemeSelector} />

      <CourseList courses={filteredCourses} />

      <ThemeSelector
        visible={showThemeSelector}
        themes={allThemes}
        selectedTheme={selectedTheme}
        onSelect={handleThemeSelect}
        onClose={() => setShowThemeSelector(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#7446EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
