import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

import {
  Image,
  Wrapper,
  UploadImageTitle,
  ImageWrapper,
  TextWrapper,
} from './NewCollection.style';
import {
  Button,
  Input,
  ContainerWithSafeArea,
  TouchableIcon,
} from '../../components';
import DefaultImage from '../../assets/images/collection_default_image.png';
import BackIcon from '../../assets/icons/back_icon.svg';

interface NewCollectionProps {
  navigation: any;
}

export const NewCollection = (props: NewCollectionProps) => {
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

  const handleCreateNewCollection = () => {};

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
      padding="0 17px">
      <Wrapper>
        <ImageWrapper onPress={uploadImage}>
          <Image
            source={collectionImage ? { uri: collectionImage } : DefaultImage}
          />
        </ImageWrapper>
        <TextWrapper onPress={uploadImage}>
          <UploadImageTitle>เลือกภาพปกของคอลเลกชัน</UploadImageTitle>
        </TextWrapper>
        <Input
          label="ขื่อคอลเลกชัน"
          onChangeText={(value) => setCollectionTitle(value)}
        />
        <Button
          text="สร้างคอลเลกชัน"
          block
          onPress={handleCreateNewCollection}
          disabled={collectionTitle === '' || !!!collectionTitle}
        />
      </Wrapper>
    </ContainerWithSafeArea>
  );
};
