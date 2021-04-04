import React, { useState } from 'react';

import {
  Card,
  CollectionIconWrapper,
  CollectionIcon,
  Title,
  ReviewCount,
  TextContainer,
  InformationContainer,
} from './CollectionCard.style';
import { TouchableIcon } from '../TouchableIcon/TouchableIcon';
import { getCollectionIconSource } from '../../utils/collection';
import MoreFunctionIcon from '../../assets/icons/more_function_icon.svg';

interface CollectionCardProps {
  icon: string;
  color: string;
  title: string;
  reviewCount?: number;
  collectionId: number;
  onPress?: () => void;
  onMore?: (collectionId: number) => void;
}

export const CollectionCard = (props: CollectionCardProps) => {
  const {
    icon,
    color,
    title,
    reviewCount,
    collectionId,
    onPress,
    onMore,
  } = props;

  return (
    <Card onPress={onPress}>
      <CollectionIconWrapper color={color}>
        <CollectionIcon source={getCollectionIconSource(icon)} />
      </CollectionIconWrapper>
      <InformationContainer>
        <TextContainer>
          <Title>{title}</Title>
          <ReviewCount>{reviewCount} รีวิว</ReviewCount>
        </TextContainer>
        <TouchableIcon
          padding="0px 0px 0px 16px"
          icon={<MoreFunctionIcon heigt={17} width={3} />}
          onPress={() => onMore && onMore(collectionId)}
        />
      </InformationContainer>
    </Card>
  );
};
