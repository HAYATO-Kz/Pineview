import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

import { FilterTabs } from '../components/FilterTabs';
import { getMarker } from '../utils/Marker';

import { MOCKDATA } from '../mock_data';

interface MapProps {
  navigation: any;
}

const filterTabs = [
  {
    label: 'All',
    value: 'all',
    color: '#531DAB',
  },
  {
    label: 'Restaurant',
    value: 'restaurant',
    color: '#FFC53D',
  },
  {
    label: 'Cafe',
    value: 'cafe',
    color: '#613400',
  },
  {
    label: 'Attraction',
    value: 'attraction',
    color: '#13C2C2',
  },
];

const Map = (props: MapProps) => {
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
      <Container>
        <SafeAreaView />
        <FilterTabs
          tabs={filterTabs}
          defaultValue="all"
          onChange={(value) => setFiltered(value)}
        />
      </Container>
    </>
  );
};

export default Map;

const Container = styled.View`
  padding: 0 10px;
  position: absolute;
`;
