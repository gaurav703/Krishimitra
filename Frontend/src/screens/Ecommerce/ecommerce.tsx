import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Ecommerce() {
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
    {
      id: 3,
      crop: 'Chlorpyrifos',
      price: '300',
      image: require('../../assets/Chloropyrifos.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 4,
      crop: 'Imidacloprid',
      price: '300',
      image: require('../../assets/Imidacloprid.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 3,
      crop: 'Maize HKH513',
      price: '300',
      image: require('../../assets/Maize.jpeg'),
      category: 'Seeds',
    },
    {
      id: 5,
      crop: 'Monocrotophos',
      price: '300',
      image: require('../../assets/Monocrotophos.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 6,
      crop: 'Tomato Seeds',
      price: '300',
      image: require('../../assets/Rename.jpeg'),
      category: 'Seeds',
    },
    {
      id: 4,
      crop: 'Soyabean JS 9560',
      price: '300',
      image: require('../../assets/Soyabean.jpeg'),
      category: 'Seeds',
    },
    {
      id: 7,
      crop: 'Wheat Seeds',
      price: '300',
      image: require('../../assets/Wheat.jpeg'),
      category: 'Seeds',
    },
  ];

  const [allData, setAllData] = useState(true);
  const [Fertilizers, setFertilizers] = useState(false);
  const [Seeds, setSeeds] = useState(false);

  const FertilizersData = [
    {
      id: 2,
      crop: 'Carbaryl',
      price: '300',
      image: require('../../assets/Carbaryl.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 3,
      crop: 'Chlorpyrifos',
      price: '300',
      image: require('../../assets/Chloropyrifos.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 4,
      crop: 'Imidacloprid',
      price: '300',
      image: require('../../assets/Imidacloprid.jpeg'),
      category: 'Fertilizers',
    },
    {
      id: 5,
      crop: 'Monocrotophos',
      price: '300',
      image: require('../../assets/Monocrotophos.jpeg'),
      category: 'Fertilizers',
    },
  ];

  console.log('FertilizersData==', FertilizersData);

  // const SeedsData = Data.filter((item: any) => {
  //   item.category == 'Seeds';
  // });

  const SeedsData = [
    {
      id: 1,
      crop: 'Cotton Seeds',
      price: '300',
      image: require('../../assets/cotton.jpeg'),
      category: 'Seeds',
    },
    {
      id: 3,
      crop: 'Maize HKH513',
      price: '300',
      image: require('../../assets/Maize.jpeg'),
      category: 'Seeds',
    },
    {
      id: 6,
      crop: 'Tomato Seeds',
      price: '300',
      image: require('../../assets/Rename.jpeg'),
      category: 'Seeds',
    },
    {
      id: 4,
      crop: 'Soyabean JS 9560',
      price: '300',
      image: require('../../assets/Soyabean.jpeg'),
      category: 'Seeds',
    },
    {
      id: 7,
      crop: 'Wheat Seeds',
      price: '300',
      image: require('../../assets/Wheat.jpeg'),
      category: 'Seeds',
    },
  ];

  console.log('SeedsData==', SeedsData);

  const getImageSource = (imageName: any) => {
    switch (imageName) {
      case 'cotton.jpeg':
        return require('../../assets/cotton.jpeg');
      case 'Image1.jpeg':
        return require('../../assets/Image1.jpeg');
      // Add more cases for other images
      default:
        return require('../../assets/cotton.jpeg'); // Provide a default image
    }
  };

  const api = async () => {
    try {
      const responce = await axios.get('http://localhost:3000/api/v1/products');
      console.log('products==', responce);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    //api
    api();
  }, []);

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
            paddingVertical: 20,
            paddingLeft: 30,
          }}>
          E-commerce
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Pressable
            style={{
              backgroundColor: allData ? '#3c9764' : '#8fc1aa',
              padding: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            onPress={() => {
              setAllData(true);
              setFertilizers(false);
              setSeeds(false);
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                fontSize: 15,
              }}>
              All
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: Fertilizers ? '#3c9764' : '#8fc1aa',
              padding: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            onPress={() => {
              setAllData(false);
              setFertilizers(true);
              setSeeds(false);
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                fontSize: 15,
              }}>
              Fertilizers
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: Seeds ? '#3c9764' : '#8fc1aa',
              padding: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            onPress={() => {
              setAllData(false);
              setFertilizers(false);
              setSeeds(true);
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                fontSize: 15,
              }}>
              Seeds
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={allData ? Data : Fertilizers ? FertilizersData : SeedsData}
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
                    backgroundColor: '#8fc1aa',
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
      </ScrollView>
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

{
  /* <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexShrink: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              width: '40%',
              backgroundColor: '#f27102',
            }}>
            <Image
              source={require('../../assets/Image1.jpeg')}
              style={{width: '100%', height: 200, objectFit: 'cover'}}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 20,
                }}>
                Crop
              </Text>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 20,
                }}>
                300
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              width: '40%',
              backgroundColor: '#f27102',
            }}>
            <Image
              source={require('../../assets/Image1.jpeg')}
              style={{width: '100%', height: 200, objectFit: 'cover'}}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                Crop
              </Text>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                300
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              width: '40%',
              backgroundColor: '#f27102',
            }}>
            <Image
              source={require('../../assets/Image1.jpeg')}
              style={{width: '100%', height: 200, objectFit: 'cover'}}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                Crop
              </Text>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                300
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              // justifyContent: 'center',
              width: '40%',
              backgroundColor: '#f27102',
            }}>
            <Image
              source={require('../../assets/Image1.jpeg')}
              style={{width: '100%', height: 200, objectFit: 'cover'}}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                Crop
              </Text>
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                300
              </Text>
            </View>
          </View>
        </View> */
}
