import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const Data = [
    {
      id: 1,
      crop: 'Cotton Seeds',
      price: '300',
      image: require('../../assets/cotton.jpeg'),
      category: 'Seeds',
    },
    {
      id: 2,
      crop: 'Carbaryl',
      price: '300',
      image: require('../../assets/Carbaryl.jpeg'),
      category: 'Fertilizers',
    },
  ];
  const api = async () => {
    try {
      const responce = axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Aurangabad,India&appid=2ab33146c33b2dfec7b0a7899548e7b1',
      );
      console.log('resp==', responce);
    } catch (error) {
      console.log('Error=========', error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <View style={style.container}>
      <View
        style={{
          backgroundColor: '#3c9764',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Sora-Regular',
            fontWeight: '600',
            color: '#fff',
            lineHeight: 25,
            paddingVertical: 20,
            paddingLeft: 30,
          }}>
          Krishimitra
        </Text>
      </View>
      {/* <View>
        <Image
          source={require('../../assets/background_beranda.png')}
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 0,
          }}
        />
      </View> */}
      <View
        style={{
          // position: 'absolute',
          // top: 0,
          // left: 0,
          marginTop: 40,
          // marginLeft: 50,
          // marginTop: 200,
          paddingVertical: 10,
          ///height: 200,
          width: 320,
          // shadowColor: '#000',
          // borderRadius: 20,
          // // borderColor: '#000',
          // // borderWidth: 2,
          // shadowOffset: {
          //   width: 2,
          //   height: 2,
          // },
          // shadowOpacity: 1,
          // shadowRadius: 2,
          // elevation: 2,
          // alignItems: 'center',
          borderRadius: 10,
          backgroundColor: '#fff',
          boxShadow: '0px 8px 16px 0px rgba(48, 48, 48, 0.05)',
          //box-shadow: 0px 8px 16px 0px rgba(48, 48, 48, 0.05);
          //justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: 20,
            paddingHorizontal: 50,
            // backgroundColor: '#3c9764',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#3c9764',
              fontSize: 20,
            }}>
            City :
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
              fontSize: 20,
            }}>
            Nanded
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: 20,
            paddingHorizontal: 50,
            // backgroundColor: '#3c9764',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#3c9764',
              fontSize: 20,
            }}>
            Temperature :
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
              fontSize: 20,
            }}>
            22.19
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: 20,
            paddingHorizontal: 50,
            // backgroundColor: '#3c9764',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#3c9764',
              fontSize: 20,
            }}>
            Humiditiy :
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
              fontSize: 20,
            }}>
            67
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: 20,
            paddingHorizontal: 50,
            // backgroundColor: '#3c9764',
          }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#3c9764',
              fontSize: 20,
            }}>
            Wind Speed :
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontWeight: '600',
              color: '#000',
              fontSize: 20,
            }}>
            2.43 km/s
          </Text>
        </View>
        {/* <Text
          style={{
            fontSize: 20,
            fontFamily: 'Sora-Regular',
            fontWeight: '600',
            color: 'black',
            lineHeight: 25,
            paddingVertical: 10,
            paddingLeft: 30,
          }}>
          Nanded
        </Text> */}
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          marginTop: -100,
        }}>
        <Text style={style.product}>Products</Text>
        <Text
          style={[
            style.product,
            {
              fontSize: 18,
              marginLeft: 120,
            },
          ]}>
          See All
        </Text>
        {/* <Text
          style={{
            fontSize: 20,
            fontFamily: 'Sora-Regular',
            fontWeight: '600',
            color: '#3c9764',
            lineHeight: 25,
            paddingVertical: 10,
            paddingLeft: 30,
          }}>
          See All
        </Text> */}
      </View>

      <FlatList
        data={Data}
        // keyExtractor={item => item.id}
        numColumns={2}
        renderItem={(itemData: any) => {
          return (
            <>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  width: '45%',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  backgroundColor: '#cfd3d0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                }}>
                <Image
                  source={itemData.item.image}
                  style={{width: 150, height: 130, objectFit: 'contain'}}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Sora-Regular',
                      fontWeight: '600',
                      color: 'black',
                      fontSize: 20,
                    }}>
                    {itemData.item.crop}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Sora-Regular',
                      fontWeight: '600',
                      fontSize: 20,
                      color: 'black',
                    }}>
                    Cost : {itemData.item.price}
                  </Text>
                </View>
                <Pressable>
                  <Text
                    style={{
                      fontFamily: 'Sora-Regular',
                      fontWeight: '600',
                      fontSize: 15,
                      color: '#fff',
                      backgroundColor: '#3c9764',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    Add to Cart
                  </Text>
                </Pressable>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#f27107',
    alignItems: 'center',
    justifyContent: 'center',
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

  product: {
    marginTop: 150,
    fontSize: 25,
    fontFamily: 'Sora-Regular',
    fontWeight: '600',
    color: '#3c9764',
    lineHeight: 25,
    paddingVertical: 10,
    paddingLeft: 30,
  },
});
