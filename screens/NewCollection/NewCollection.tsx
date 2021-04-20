import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

import { Wrapper, MarginWrapper } from './NewCollection.style';
import {
  Button,
  Input,
  ContainerWithSafeArea,
  TouchableIcon,
  CollectionIcon,
  CollectionIconSelection,
  ColorPalette,
} from '../../components';
import { backendAPI } from '../../utils/api';
import BackIcon from '../../assets/icons/back_icon.svg';

interface NewCollectionProps {
  navigation: any;
}

export const NewCollection = (props: NewCollectionProps) => {
  const { navigation } = props;
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionIconSelected, setCollectionIconSelected] = useState('heart');
  const [collectionColorSelected, setCollectionColorSelected] = useState(
    '#ffffff',
  );
  const [waiting, setWaiting] = useState(false);

  const handleCreateNewCollection = async () => {
    setWaiting(true);
    const authToken = await AsyncStorage.getItem('authToken');
    const newCollection = {
      collection_icon: collectionIconSelected,
      collection_color: collectionColorSelected,
      userToken: authToken,
      collection_title: collectionTitle,
    };

    const response = await backendAPI
      .post('/create_new_collection', newCollection)
      .catch((err) => console.log(err));
    setWaiting(false);
    if (response) {
      navigation.goBack();
    }
  };

  return (
    <ContainerWithSafeArea
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'สร้างคอลเลกชันใหม่',
        hasBorder: true,
      }}
      paddingTop={16}
      paddingRear={32}
      isInTabMode
      loading={false}>
      <Wrapper>
        <CollectionIcon
          size={135}
          icon={collectionIconSelected}
          color={collectionColorSelected}
        />
        <MarginWrapper>
          <CollectionIconSelection
            label="เลือกไอคอนประจำคอลเลกชัน"
            value={collectionIconSelected}
            onChange={(selectedIcon: string) =>
              setCollectionIconSelected(selectedIcon)
            }
          />
        </MarginWrapper>
        <MarginWrapper>
          <ColorPalette
            label="เลือกสีพื้นหลังประจำคอลเลกชัน"
            value={collectionColorSelected}
            onChange={(selectedColor) =>
              setCollectionColorSelected(selectedColor)
            }
          />
        </MarginWrapper>
        <MarginWrapper>
          <Input
            label="ชื่อคอลเลกชัน"
            autoCapitalize="none"
            onChangeText={(value) => setCollectionTitle(value)}
            maxLength={15}
          />
        </MarginWrapper>
        <Button
          text="สร้างคอลเลกชัน"
          block
          onPress={handleCreateNewCollection}
          disabled={collectionTitle === '' || waiting}
        />
      </Wrapper>
    </ContainerWithSafeArea>
  );
};
