import React from 'react';

import { Wrapper, Image } from './CollectionIcon.style';
import { getCollectionIconSource } from '../../utils/collection';

interface CollectionIconProps {
  color?: string;
  size: number;
  icon: string;
}

export const CollectionIcon = (props: CollectionIconProps) => {
  const { color = '#ffffff', size, icon } = props;

  return (
    <Wrapper width={size} color={color}>
      <Image source={getCollectionIconSource(icon)} />
    </Wrapper>
  );
};
