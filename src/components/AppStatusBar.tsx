import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const AppStatusBar = (props: StatusBarProps) => (
  <View style={[styles.statusBar, { backgroundColor: props.backgroundColor }]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={props.backgroundColor}
        {...props}
      />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default AppStatusBar;
