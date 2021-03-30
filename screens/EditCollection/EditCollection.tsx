import React, { useState } from 'react';

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
        title: 'แก้ไขคอลเลกชัน',
        hasBorder: true,
      }}
      padding="0 34px">
      <Wrapper>
        <Input
          label="ขื่อคอลเลกชัน"
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
