import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <ScrollView style={style.container}>
      <View>
        <Image
          source={require('../../assets/background_beranda.png')}
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 0,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#fff',
          zIndex: 100,
          marginLeft: 50,
          marginTop: 200,
          paddingVertical: 40,
          paddingHorizontal: 20,
          shadowColor: '#000',
          borderRadius: 20,
          shadowOffset: {
            width: -5,
            height: 5,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            gap: 30,
          }}>
          <Image
            source={require('../../assets/Image1.png')}
            style={{
              width: 106.7,
              height: 111,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 50,
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                color: '#000',
              }}>
              28
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                color: '#000',
              }}>
              Night Rain
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
            }}>
            10
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
            }}>
            10
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
            }}>
            10
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#ffffff',
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
