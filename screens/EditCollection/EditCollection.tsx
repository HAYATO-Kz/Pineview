import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

import {
  Image,
  Wrapper,
  UploadImageTitle,
  ImageWrapper,
  TextWrapper,
} from './EditCollection.style';
import {
  Button,
  Input,
  ContainerWithSafeArea,
  TouchableIcon,
} from '../../components';
import DefaultImage from '../../assets/images/collection_default_image.png';
import BackIcon from '../../assets/icons/back_icon.svg';

interface EditCollectionProps {
  navigation: any;
}

export const EditCollection = (props: EditCollectionProps) => {
  const { navigation } = props;
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionImage, setCollectionImage] = useState<any>();

  const uploadImage = () => {
    try {
      launchImageLibrary(
        { mediaType: 'photo', includeBase64: true },
        (response: any) => {
          if (response.didCancel) {
            console.log('cancel');
          } else if (response.errorMessage) {
            console.log(response.errorMessage);
            console.log(response.errorCode);
          } else {
            setCollectionImage(
              `data:${response.type};base64,${response.base64}`,
            );
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateEditCollection = () => {};

  return (
    <ContainerWithSafeArea
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'แก้ไขคอลเลกชั่น',
        hasBorder: true,
      }}
      padding="0 34px">
      <Wrapper>
        <ImageWrapper onPress={uploadImage}>
          <Image
            source={collectionImage ? { uri: collectionImage } : DefaultImage}
          />
        </ImageWrapper>
        <TextWrapper onPress={uploadImage}>
          <UploadImageTitle>เลือกภาพปกของคอลเลกชั่น</UploadImageTitle>
        </TextWrapper>
        <Input
          label="ขื่อคอลเลกชั่น"
          onChangeText={(value) => setCollectionTitle(value)}
        />
        <Button
          text="บันทึก"
          block
          onPress={handleCreateEditCollection}
          disabled={collectionTitle === '' || !!!collectionTitle}
        />
      </Wrapper>
    </ContainerWithSafeArea>
  );
};
