import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

import {useCallback} from 'react';

const supportedURL = 'https://pmfby.gov.in/';
const supportedURL1 = 'https://pmksy.gov.in/';
const supportedURL2 = 'https://pmkisan.gov.in/';
const supportedURL3 = 'https://dmi.gov.in/Schemegby.aspx';
const supportedURL4 = 'https://pmkmy.gov.in/scheme/pmkmy';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <Text
        style={{
          fontFamily: 'Sora-Regular',
          fontWeight: '600',
          fontSize: 15,
          color: '#fff',
          backgroundColor: '#3c9764',
          // paddingVertical: 10,
          // paddingHorizontal: 10,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          // width: 120,
        }}>
        {children}
      </Text>
    </Pressable>
  );
};

// const handlePress = useCallback(async () => {
//   // Checking if the link is supported for links with custom URL scheme.
//   const supported = await Linking.canOpenURL(url);

//   if (supported) {
//     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//     // by some browser in the mobile
//     await Linking.openURL(url);
//   } else {
//     Alert.alert(`Don't know how to open this URL: ${url}`);
//   }
// }, [url]);

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
            paddingVertical: 20,
            paddingLeft: 30,
          }}>
          Government Schemes and Policies
        </Text>
      </View>
      <ScrollView
        style={
          {
            // marginBottom: 50,
          }
        }>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 250,
          }}>
          <Image
            source={require('../../assets/Image1.jpeg')}
            style={{
              display: 'flex',
              height: 400,
              width: 320,
              objectFit: 'contain',
              zIndex: 0,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={style.text_head}>
            1. Pradhan Mantri Fasal Bima Yojna
          </Text>
          <Text style={style.text_description}>
            The Pradhan Mantri Fasal Bima Yojana (PMFBY) is a
            government-sponsored crop insurance scheme launched on 18 February
            2016 by Prime Minister Narendra Modi.1 It aims to provide financial
            support to farmers suffering crop loss/damage arising out of natural
            calamities. The maximum premium payable by farmers is 2% for all
            food and oilseeds crops grown in the kharif (summer) season, 1.5%
            for the same crops grown in the rabi (winter) season, and 5% for
            commercial and horticulture crops.0 PMFBY is the only flagship
            scheme of the government for agricultural insurance in India. It
            aims to support sustainable production in the agriculture sector by
            following ways
          </Text>
          {/* <Pressable>
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
                width: 150,
              }}>
              Go to Website
            </Text>
          </Pressable> */}
          <OpenURLButton url={supportedURL}>Go to webiste</OpenURLButton>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={style.text_head}>
            2. Pradhan Mantri Krishi Sinchayee Yojna
          </Text>
          <Text style={style.text_description}>
            Har Khet ko Pani “Prime Minister Krishi Sinchayee Yojana” Government
            of India is committed to accord high priority to water conservation
            and its management. To this effect Pradhan Mantri Krishi Sinchayee
            Yojana (PMKSY) has been formulated with the vision of extending the
            coverage of irrigation ‘Har Khet ko pani’ and improving water use
            efficiency ‘More crop per drop' in a focused manner with end to end
            solution on source creation, distribution, management, field
            application and extension activities. The Cabinet Committee on
            Economic Affairs chaired by Hon’ble Prime Minister has accorded
            approval of Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) in its
            meeting held on 1st July, 2015. DA&FW is implementing Per Drop More
            Crop scheme which is operational from 2015-16 in the Country. The
            Per Drop More Crop scheme mainly focuses on water use efficiency at
            farm level through Micro Irrigation (Drip and Sprinkler Irrigation
            System). PDMC is being implemented under RKVY from 2022-23
          </Text>
          <OpenURLButton url={supportedURL1}>Go to webiste</OpenURLButton>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={style.text_head}>
            3. Pradhan Mantri Kisan Samman Nidhi
          </Text>
          <Text style={style.text_description}>
            PM Kisan is a Central Sector scheme with 100% funding from
            Government of India. It has become operational from 1.12.2018. Under
            the scheme an income support of 6,000/- per year in three equal
            installments will be provided to all land holding farmer families.
            Definition of family for the scheme is husband, wife and minor
            children. State Government and UT administration will identify the
            farmer families which are eligible for support as per scheme
            guidelines. The fund will be directly transferred to the bank
            accounts of the beneficiaries. There are various Exclusion
            Categories for the scheme.
          </Text>
          <OpenURLButton url={supportedURL2}>Go to webiste</OpenURLButton>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={style.text_head}>4. Gramin Bhandaran Scheme</Text>
          <Text style={style.text_description}>
            Gramin Bhandaran Yojana, also known as NABARD Warehouse Scheme or
            Rural Godown Scheme, is a capital investment subsidy scheme offered
            by the Indian government to individuals or organizations that build
            or renovate rural godowns for storing farm produce. The scheme aims
            to increase the holding capacity of small farmers and prevent
            distress sales by promoting pledge financing and marketing
            credit.The scheme can also be availed by rural godowns positioned in
            various food parks.The government provides supports to individuals,
            companies, farmers, local government, NGOs, and various associations
            for building or renovating rural godowns.The application form for
            the scheme is available online.
          </Text>
          <OpenURLButton url={supportedURL3}>Go to webiste</OpenURLButton>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={style.text_head}>
            5. Pradhan mantri Kisan Maan – Dhan Yojna
          </Text>
          <Text style={style.text_description}>
            Pradhan Mantri Kisan Maandhan Yojana is a government scheme meant
            for old age protection and social security of Small and Marginal
            Farmers (SMF). All Small and Marginal Farmers having cultivable
            landholding up to 2 hectares falling in the age group of 18 to 40
            years, whose names appear in the land records of States/UTs as on
            01.08.2019 are eligible to get benefit under the Scheme.Under this
            scheme, the farmers would receive a minimum assured pension of Rs
            3000/- per month after attaining the age of 60 years and if the
            farmer dies, the spouse of the farmer shall be entitled to receive
            50% of the pension as family pension. Family pension is applicable
            only to spouse.
          </Text>
          <OpenURLButton url={supportedURL4}>Go to webiste</OpenURLButton>
        </View>
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
  text_head: {
    fontSize: 20,
    fontFamily: 'Sora-Regular',
    fontWeight: '600',
    color: 'black',
    lineHeight: 25,
    paddingVertical: 10,
    paddingLeft: 30,
  },

  text_description: {
    fontSize: 16,
    fontFamily: 'Sora-Regular',
    fontWeight: '400',
    color: 'black',
    lineHeight: 25,
    paddingVertical: 10,
    paddingLeft: 30,
  },

  button: {
    backgroundColor: '#3c9764',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 100,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
