import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Table, Row, Cell, TableWrapper} from 'react-native-table-component';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

export default function APMC_screen() {
  const [Data, setData] = useState([]);
  const [state, setstate] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const getData = async () => {
    try {
      const resp = await axios.get(
        'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001987c65666f9c49656f0f9ef4fa3650e7&format=json&offset=0&limit=10000',
      );
      //console.log('resppppppppppppppppppp', resp.data.records);
      setData(resp.data.records);

      const states: any = Array.from(
        new Set(resp.data.records.map((item: any) => item.state)),
      );

      //console.log('states', states);
      setstate(states);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // District
  const [District, setDistrict] = useState([]);

  const [selectedState, setSelectedState] = useState('');
  const select = (select: any) => {
    // console.log('selectedState', select);
    setSelectedState(select);

    const district: any = Array.from(
      new Set(
        Data.filter((item: any) => item.state === select).map(
          (item: any) => item.district,
        ),
      ),
    );

    //console.log('district', district);
    setDistrict(district);
  };

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [tableda, settableda] = useState([]);
  const select1 = (select: any) => {
    // console.log('selectedState', select);
    setSelectedDistrict(select);
    let tabledata: any = Data.filter(
      (item: any) => item.state === selectedState,
    )
      .filter((item: any) => item.district === select)
      .map((item: any) => [
        item.commodity,
        item.variety,
        item.market,
        item.min_price,
        item.max_price,
        item.modal_price,
      ]);
    settableda(tabledata);
  };

  const tableData = {
    tableHead: [
      'Commidity',
      'variety',
      'market',
      'Min Price',
      'Max Price',
      'Modal Price',
    ],
  };

  return (
    <ScrollView style={style.container}>
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
          APMC PRICE
        </Text>
      </View>

      <View style={style.main_cont}>
        <View style={style.text_cont}>
          <Text style={style.text1}>State :</Text>
          {/* {state.map((item: any, index: any) => {
            return <Text key={index}>{item}</Text>;
          })} */}
          <Text>{selectedState}</Text>
          <Pressable
            style={style.button}
            onPress={() => {
              setVisible(true);
            }}>
            <Text>Pick</Text>
          </Pressable>
          {/* <Image
            source={require('../../assets/Polygon 2.png')}
            style={{height: 13, width: 13}}
          /> */}
        </View>
        <View style={style.text_cont}>
          <Text style={style.text1}>District :</Text>
          <Text>{selectedDistrict}</Text>
          <Pressable
            style={style.button}
            onPress={() => {
              setVisible1(true);
            }}>
            <Text>Pick</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          borderColor: '#f5f5f5',
          borderWidth: 3,
          marginTop: '2%',
          padding: '1%',
          minHeight: 100,
          marginHorizontal: '2%',
        }}>
        <Table>
          <View style={{}}>
            <Row
              data={tableData.tableHead}
              style={{
                backgroundColor: '#f5f5f5',
              }}
              textStyle={style.rowtext}
            />
          </View>
          {tableda.map((rowData: any, index: any) => (
            <TableWrapper key={index} style={style.row}>
              {rowData.map((cellData: any, cellIndex: any) => (
                <Cell key={cellIndex} data={cellData} textStyle={style.text} />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>

      {/* states */}
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 100,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: '92%',
              height: '80%',
              borderRadius: 10,
              padding: '5%',
              elevation: 5,
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 10,
                height: 10,
              },
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                color: '#3c9764',
                lineHeight: 25,
              }}>
              States
            </Text>
            <View style={style.list1}>
              <FlatList
                data={state}
                renderItem={(itemData: any) => {
                  return (
                    <>
                      <Pressable
                        style={style.list}
                        onPress={() => {
                          select(itemData.item);
                        }}>
                        <Text>{itemData.item}</Text>
                      </Pressable>
                    </>
                  );
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 20,
              }}>
              <Pressable
                style={{
                  marginTop: 20,
                }}
                onPress={() => {
                  setVisible(false);
                  setSelectedState('');
                  setSelectedDistrict('');
                  settableda([]);
                }}>
                <Text
                  style={{
                    backgroundColor: '#a0a0a0',
                    fontSize: 18,
                    width: 100,
                    alignItems: 'center',
                    borderRadius: 10,
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Sora-Regular',
                    fontWeight: '600',
                    color: '#fff',
                    padding: 10,
                    // fontSize: 12,
                    // fontFamily: 'Sora-Regular',
                    // fontWeight: '400',
                    // color: '#a0a0a0',
                    // lineHeight: 15,
                  }}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    backgroundColor: '#3c9764',
                    fontSize: 18,
                    width: 100,
                    alignItems: 'center',
                    borderRadius: 10,
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Sora-Regular',
                    fontWeight: '600',
                    color: '#fff',
                    padding: 10,
                    // fontSize: 12,
                    // fontFamily: 'Sora-Regular',
                    // fontWeight: '400',
                    // color: '#a0a0a0',
                    // lineHeight: 15,
                  }}
                  onPress={() => {
                    setVisible(false);
                  }}>
                  Pick
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* District */}
      <Modal visible={visible1} transparent={true}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            marginTop: 100,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: '92%',
              minHeight: '20%',
              borderRadius: 10,
              padding: '5%',
              elevation: 5,
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 10,
                height: 10,
              },
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Sora-Regular',
                fontWeight: '600',
                color: '#3c9764',
                lineHeight: 25,
              }}>
              States
            </Text>
            <View style={style.list1}>
              <FlatList
                data={District}
                renderItem={(itemData: any) => {
                  return (
                    <>
                      <Pressable
                        style={style.list}
                        onPress={() => {
                          select1(itemData.item);
                        }}>
                        <Text>{itemData.item}</Text>
                      </Pressable>
                    </>
                  );
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 20,
              }}>
              <Pressable
                style={{
                  marginTop: 20,
                }}
                onPress={() => {
                  setVisible1(false);
                  setSelectedDistrict('');
                  settableda([]);
                }}>
                <Text
                  style={{
                    backgroundColor: '#a0a0a0',
                    fontSize: 18,
                    width: 100,
                    alignItems: 'center',
                    borderRadius: 10,
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Sora-Regular',
                    fontWeight: '600',
                    color: '#fff',
                    padding: 10,
                    // fontSize: 12,
                    // fontFamily: 'Sora-Regular',
                    // fontWeight: '400',
                    // color: '#a0a0a0',
                    // lineHeight: 15,
                  }}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    backgroundColor: '#3c9764',
                    fontSize: 18,
                    width: 100,
                    alignItems: 'center',
                    borderRadius: 10,
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Sora-Regular',
                    fontWeight: '600',
                    color: '#fff',
                    padding: 10,
                    // fontSize: 12,
                    // fontFamily: 'Sora-Regular',
                    // fontWeight: '400',
                    // color: '#a0a0a0',
                    // lineHeight: 15,
                  }}
                  onPress={() => {
                    setVisible1(false);
                  }}>
                  Pick
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
  text1: {
    fontSize: 18,
    color: '#000',
  },

  text_cont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#bdf0d5',
    padding: 10,
    borderRadius: 10,
  },

  list: {
    padding: 7,
  },

  list1: {
    height: 400,
  },
  rowtext: {
    fontFamily: 'Sora-Regular',
    fontSize: 10,
    color: '#393939',
    textAlign: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '15%',
  },
  row: {flexDirection: 'row'},

  text: {
    fontFamily: 'Sora-Regular',
    fontSize: 10,
    color: '#393939',
    textAlign: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '15%',
  },
});
