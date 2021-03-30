import React, { useState } from 'react';

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
        <Input
          label="ชื่อคอลเลกชัน"
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
