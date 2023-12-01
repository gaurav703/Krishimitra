import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function profile() {
  return (
    <View style={style.container}>
      <View
        style={{
          backgroundColor: '#3c9764',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Sora-Regular',
            fontWeight: '600',
            color: '#fff',
            lineHeight: 25,
            paddingVertical: 10,
            paddingLeft: 30,
          }}>
          Profile
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdf0d5',
  },
  main_cont: {
    marginHorizontal: 40,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
