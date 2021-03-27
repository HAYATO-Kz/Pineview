import React, { useState } from 'react';

import {
  Title,
  SubContainer,
  NewCollectionButton,
  NewCollectionButtonText,
  SubContainerText,
  GridWrapper,
  ConfirmationModalProps,
} from './Collection.style';
import PlusIcon from '../../assets/icons/plus_icon.svg';
import { CollectionCard, Grid, ContainerWithSafeArea } from '../../components';

interface CollectionProps {
  navigation: any;
}

const testData = [
  {
    id: 1,
    title: 'Hello',
    review: 12,
  },
  {
    id: 2,
    title: 'Hello',
    review: 12,
  },
  {
    id: 3,
    title: 'Hello',
    review: 12,
  },
  {
    id: 4,
    title: 'Hello',
    review: 12,
  },
  {
    id: 5,
    title: 'Hello',
    review: 12,
  },
  {
    id: 6,
    title: 'Hello',
    review: 12,
  },
  {
    id: 7,
    title: 'Hello',
    review: 12,
  },
  {
    id: 8,
    title: 'Hello',
    review: 12,
  },
  {
    id: 9,
    title: 'Hello',
    review: 12,
  },
];

export const Collection = (props: CollectionProps) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const onDeleteHandle = () => {
    
  }

  return (
    <ContainerWithSafeArea>
      <Title>คอลเลกชั่น</Title>
      <SubContainer>
        <SubContainerText>คอลเลกชั่นทั้งหมด</SubContainerText>
        <NewCollectionButton
          onPress={() => {
            navigation.navigate('NewCollection');
          }}>
          <PlusIcon />
          <NewCollectionButtonText>
            สร้างคอลเล็กชั่นใหม่
          </NewCollectionButtonText>
        </NewCollectionButton>
      </SubContainer>
      <GridWrapper>
        <Grid
          data={testData.map((data) => (
            <CollectionCard
              title={data.title}
              reviewCount={data.review}
              onEdit={() => {
                navigation.navigate('EditCollection', {
                  collectoin_id: data.id,
                });
              }}
              onPress={() => {
                navigation.navigate('CollectionBlog');
              }}
              onDelete={onDeleteHandle}
            />
          ))}
        />
      </GridWrapper>

    </ContainerWithSafeArea>
  );
};
