import React from 'react';
import { ImageProps } from 'react-native';

import {
  Card,
  CollectionImage,
  Title,
  InformationContainer,
} from './CollectionBlogCard.style';

import DefaultImage from '../../assets/images/collection_default_image.png';

interface CollectionBlogCardProps {
  image?: ImageProps['source'];
  title: string;
  onPress?: () => void;
}

export const CollectionBlogCard = (props: CollectionBlogCardProps) => {
  const { image = DefaultImage, title, onPress } = props;

  return (
    <Card onPress={onPress}>
      <CollectionImage source={image} resizeMode="contain" />
      <InformationContainer>
        <Title numberOfLines={2}>{title}</Title>
      </InformationContainer>
    </Card>
  );
};
