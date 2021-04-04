import React from 'react';

import {
  Text,
  IconContainer,
  Container,
  IconWrapper,
  RowContainer,
} from './CollectionIconSelection.style';
import { CollectionPlate } from '../CollectionPlate/CollectionPlate';

interface CollectoinIconSelectionProps {
  label: string;
  value?: string;
  onChange: (selectedValue: string) => void;
}

const avaliableIconRows = [
  ['heart', 'cloud', 'king', 'rocket', 'star'],
  ['thunder', 'fire', 'headphone', 'camera', 'pin'],
];

export const CollectionIconSelection = (
  props: CollectoinIconSelectionProps,
) => {
  const { label, value, onChange } = props;

  return (
    <Container>
      <Text>{label}:</Text>
      <IconContainer>
        {avaliableIconRows.map((avaliableIconRow) => (
          <RowContainer>
            {avaliableIconRow.map((avaliableIcon) => (
              <IconWrapper onPress={() => onChange(avaliableIcon)}>
                <CollectionPlate
                  icon={avaliableIcon}
                  isActive={value === avaliableIcon}
                />
              </IconWrapper>
            ))}
          </RowContainer>
        ))}
      </IconContainer>
    </Container>
  );
};
