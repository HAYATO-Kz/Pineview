import React from 'react';

import { Plate, ActiveText } from './ColorPlate.style';

interface ColorPlateProps {
  color: string;
  isActive?: boolean;
}

export const ColorPlate = (props: ColorPlateProps) => {
  const { color, isActive } = props;

  return (
    <Plate color={color} isActive={isActive}>
      {isActive && <ActiveText>เลือกสีนี้</ActiveText>}
    </Plate>
  );
};
