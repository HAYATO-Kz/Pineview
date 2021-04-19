import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

import { FilterBar, ContainerWithSafeArea, Button } from '../../components';
import {
  AbsoluteWrapper,
  SearchInput,
  SearchInputContainer,
  Logo,
  LogoWrapper,
  Container,
  HeadContainer,
  ButtonWrapper,
  ToolTipContainer,
  ToolTipLabelWrapper,
  Label,
  Divider,
} from './Map.style';
import { getMarker } from '../../utils/Marker';
import { backendAPI, geocodingAPI } from '../../utils/api';
import LogoSource from '../../assets/images/collection_default_image.png';

const API_KEY = 'AIzaSyAKX_x92biMVN3S7wz9zCbYqcqyIRIbtl4';

interface MapProps {
  navigation: any;
}

const filterTabs = [
  {
    label: 'ทั้งหมด',
    value: 'all',
    color: '#531DAB',
  },
  {
    label: 'ร้านอาหาร',
    value: 'restaurant',
    color: '#FFC53D',
  },
  {
    label: 'คาเฟ่',
    value: 'cafe',
    color: '#613400',
  },
  {
    label: 'แหล่งท่องเที่ยว',
    value: 'attraction',
    color: '#13C2C2',
  },
];

export const Map = (props: MapProps) => {
  const [region, setRegion] = useState({
    latitude: 13.7468,
    longitude: 100.5348,
    latitudeDelta: 0.009,
    longitudeDelta: 0.004,
  });

  const [savedCurrent, setSavedCurrent] = useState({
    latitude: 13.7468,
    longitude: 100.5348,
    latitudeDelta: 0.009,
    longitudeDelta: 0.004,
  });
  const [loading, setLoading] = useState(false);
  const [mapChnged, setMapChanged] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  const [filter, setFiltered] = useState('all');

  const { navigation } = props;

  const getReview = async (
    filterChange: string,
    regionChange: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    },
  ) => {
    setLoading(true);
    const maxLat = regionChange.latitude + regionChange.latitudeDelta / 2;
    const minLat = regionChange.latitude - regionChange.latitudeDelta / 2;

    const maxLng = regionChange.longitude + regionChange.longitudeDelta / 2;
    const minLng = regionChange.longitude - regionChange.longitudeDelta / 2;

    const response = await backendAPI
      .get(
        `/pin?type=${filterChange}&maxLat=${maxLat}&minLat=${minLat}&maxLng=${maxLng}&minLng=${minLng}`,
      )
      .catch((err) => console.log(err));
    ``;
    if (response) {
      setReviewData(response.data);
    }
    setMapChanged(false);
    setLoading(false);
  };

  const search = async (textInput: string) => {
    setLoading(true);
    const textArray = textInput.split(' ');
    let formatedText = '';
    textArray.forEach((text, index) => {
      if (index !== 0) {
        formatedText += `+${text}`;
      } else {
        formatedText += `${text}`;
      }
    });
    const searchResposnse = await geocodingAPI
      .get(`json?address=${formatedText}&key=${API_KEY}`)
      .catch((err) => console.log(err));

    if (searchResposnse) {
      const { results } = searchResposnse.data;
      if (results.length > 0) {
        const { lat, lng } = searchResposnse.data.results[0].geometry.location;
        setRegion({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        });
        getReview(filter, {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        });
      }
    }
  };

  const onReload = () => {
    getReview(filter, region);
  };

  const getCurrent = async () => {
    await Geolocation.getCurrentPosition((info) => {
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      });
      setSavedCurrent({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      });
      getReview(filter, {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      });
    });
  };

  useEffect(() => {
    // Get current position and set to initial postion of map
    getCurrent();
  }, []);

  return (
    <>
      <MapView
        style={{
          flex: 1,
        }}
        onRegionChangeComplete={(newRegion) => {
          if (newRegion !== savedCurrent) {
            setMapChanged(true);
            setRegion(newRegion);
          }
        }}
        region={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        }}>
        {reviewData.map((review: any[]) => {
          if (true) {
            return (
              <Marker
                onPress={
                  review.length === 1
                    ? () => {
                        navigation.navigate('Review', {
                          id: review[0].kratooID,
                        });
                      }
                    : () => {}
                }
                image={getMarker(review[0].type)}
                key={review[0].kratooID}
                coordinate={{
                  latitude: review[0].postions.lat,
                  longitude: review[0].postions.lng,
                }}>
                {review.length > 1 && (
                  <ToolTipContainer tooltip>
                    {review.map((re, index) => (
                      <React.Fragment key={re.kratooID}>
                        <ToolTipLabelWrapper
                          onPress={() => {
                            navigation.navigate('Review', { id: re.kratooID });
                          }}>
                          <Label>{re.kratooTitle}</Label>
                        </ToolTipLabelWrapper>
                        {index !== review.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </ToolTipContainer>
                )}
              </Marker>
            );
          }
        })}
      </MapView>
      <AbsoluteWrapper>
        <ContainerWithSafeArea
          padding="0px 10px"
          isTransparent
          loading={loading}>
          <Container>
            <HeadContainer>
              <SearchInputContainer>
                <SearchInput
                  onSubmitEditing={(e) => search(e.nativeEvent.text)}
                  placeholder="Search"
                />
                <LogoWrapper onPress={() => getCurrent()}>
                  <Logo source={LogoSource} />
                </LogoWrapper>
              </SearchInputContainer>
              <FilterBar
                tabs={filterTabs}
                defaultValue="all"
                onChange={(value) => {
                  setFiltered(value);
                  getReview(value, region);
                }}
              />
            </HeadContainer>
          </Container>
        </ContainerWithSafeArea>
      </AbsoluteWrapper>
      {mapChnged && (
        <ButtonWrapper>
          <Button text="ค้นหาอีกครั้งในบริเวณนี้" onPress={onReload} block />
        </ButtonWrapper>
      )}
    </>
  );
};
