import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

import { FilterBar, ContainerWithSafeArea } from '../../components';
import { AbsoluteWrapper } from './Map.style';
import { getMarker } from '../../utils/Marker';

import { MOCKDATA } from '../../mock_data';

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
  const [initlat, setInitlat] = useState(0.0);
  const [initlong, setInitLong] = useState(0.0);

  // mock state for filter feature
  const [filter, setFiltered] = useState('all');

  const { navigation } = props;

  useEffect(() => {
    // Get current position and set to initial postion of map
    Geolocation.getCurrentPosition((info) => {
      setInitlat(info.coords.latitude);
      setInitLong(info.coords.longitude);
    });
  }, []);

  return (
    <>
      <MapView
        style={{
          flex: 1,
        }}
        region={{
          latitude: initlat,
          longitude: initlong,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        {MOCKDATA.map((data) => {
          if (data.type === filter || filter === 'all')
            return (
              <Marker
                onPress={() => {
                  navigation.navigate('Review', { id: data.lazy });
                }}
                image={getMarker(data.type)}
                key={data.id}
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longtitude,
                }}
              />
            );
        })}
      </MapView>
      <AbsoluteWrapper>
        <ContainerWithSafeArea padding="0px 10px">
          <FilterBar
            tabs={filterTabs}
            defaultValue="all"
            onChange={(value) => setFiltered(value)}
          />
        </ContainerWithSafeArea>
      </AbsoluteWrapper>
    </>
  );
};
