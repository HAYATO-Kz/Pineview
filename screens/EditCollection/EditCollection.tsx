import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Wrapper, MarginWrapper } from './EditCollection.style';
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

interface EditCollectionProps {
  navigation: any;
  route: any;
}

export const EditCollection = (props: EditCollectionProps) => {
  const { navigation, route } = props;
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionIconSelected, setCollectionIconSelected] = useState('heart');
  const [collectionColorSelected, setCollectionColorSelected] = useState(
    '#ffffff',
  );
  const [checkDirty, setCheckDirty] = useState({
    title: '',
    icon: 'heart',
    color: '#ffffff',
  });

  const handleCreateEditCollection = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    let editCollection = {
      collection_id: route.params.collectionId,
      userToken: authToken,
    };
    if (collectionTitle !== checkDirty.title && collectionTitle !== '') {
      editCollection = { collection_title: collectionTitle, ...editCollection };
    }

    if (collectionIconSelected !== checkDirty.icon) {
      editCollection = {
        collection_icon: collectionIconSelected,
        ...editCollection,
      };
    }

    if (collectionColorSelected !== checkDirty.color) {
      editCollection = {
        collection_color: collectionColorSelected,
        ...editCollection,
      };
    }
    const response = await backendAPI
      .put(`/edit_collection`, editCollection)
      .catch((err) => console.log(err));

    if (response) {
      navigation.goBack();
    }
  };

  const getCollection = async () => {
    const response = await backendAPI
      .get(`/collection_detail/${route.params.collectionId}`)
      .catch((err) => console.log(err));

    if (response) {
      const {
        collection_color,
        collection_icon,
        collection_title,
      } = response.data;
      setCheckDirty({
        title: collection_title,
        icon: collection_icon,
        color: collection_color,
      });
      setCollectionColorSelected(collection_color);
      setCollectionIconSelected(collection_icon);
      setCollectionTitle(collection_title);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <ContainerWithSafeArea
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'แก้ไขคอลเลกชัน',
        hasBorder: true,
      }}
      padding="16px 32px">
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
            defaultValue={collectionTitle}
            onChangeText={(value) => setCollectionTitle(value)}
          />
        </MarginWrapper>
        <Button
          text="บันทึก"
          block
          onPress={handleCreateEditCollection}
          disabled={
            (collectionTitle === checkDirty.title || collectionTitle === '') &&
            collectionIconSelected === checkDirty.icon &&
            collectionColorSelected === checkDirty.color
          }
        />
      </Wrapper>
    </ContainerWithSafeArea>
  );
};
