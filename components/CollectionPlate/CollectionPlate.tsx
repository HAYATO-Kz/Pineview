import React from 'react';

import { Plate, Image } from './CollectionPlate.style';
import { getCollectionIconSource } from '../../utils/collection';

interface CollectionPlateProps {
  isActive?: boolean;
  icon: string;
}

export const CollectionPlate = (props: CollectionPlateProps) => {
  const { isActive, icon } = props;

  return (
    <Plate isActive={isActive}>
      <Image source={getCollectionIconSource(icon)} />
    </Plate>
  );
};
