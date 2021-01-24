import MapView, {Marker} from 'react-native-maps';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import styled from 'styled-components/native';
import {SafeAreaView, StatusBar} from 'react-native';

import {FilterTabs} from './components/FilterTabs';
import {getMarker} from './utils/Marker';

// mock data
const mockData = [
  {
    id: 'marker_1',
    latitude: 13.822907,
    longtitude: 100.528219,
    type: 'cafe',
  },
  {
    id: 'marker_2',
    latitude: 13.822707,
    longtitude: 100.528419,
    type: 'restaurant',
  },
  {
    id: 'marker_3',
    latitude: 13.822707,
    longtitude: 100.528819,
    type: 'attraction',
  },
];

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

  const {navigation} = props;

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setInitlat(info.coords.latitude);
      setInitLong(info.coords.longitude);
    });
    // navigator.geolocation.watchPosition((position) => {
    //   // Create the object to update this.state.mapRegion through the onRegionChange function
    //   setInitlat(position.coords.latitude)
    //   setInitLoing(position.coords.longitude)
    // }, (error)=>console.log(error));
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
        {mockData.map((data) => {
          if (data.type === filter || filter === 'all')
            return (
              <Marker
                onPress={() => {
                  navigation.navigate('Review', {id: data.id});
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
        {/* <Picker
              mode="dropdown"
              style={{
                marginTop: 20,
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'brown',
              }}
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              onValueChange={(value)=>console.log(value)}
            >
              <Picker.Item label="Cafe" value="key0" />
              <Picker.Item label="Winng" value="key1" />
            </Picker> */}
        {/* </SafeAreaView> */}
      </MapView>
      <Container>
        <AreaView />
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

const AreaView = styled(SafeAreaView)``;

const Container = styled.View`
  padding: 0 10px;
  position: absolute;
`;
