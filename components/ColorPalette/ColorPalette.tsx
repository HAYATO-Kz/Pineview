import React from 'react';
import { FlatList } from 'react-native';

import { ColorPlate } from '../ColorPlate/ColorPlate';
import { Container, PlateWrapper, Text } from './ColorPalette.style';

interface ColorPaletteProps {
  label: string;
  value: string;
  onChange?: (selectedColor: string) => void;
}

const colors = [
  '#ffffff',
  '#ffd8bf',
  '#ffe7ba',
  '#fff1b8',
  '#ffffb8',
  '#f4ffb8',
  '#d9f7be',
  '#b5f5ec',
  '#bae7ff',
  '#d6e4ff',
  '#efdbff',
  '#ffd6e7',
];

export const ColorPalette = (props: ColorPaletteProps) => {
  const { value , label, onChange } = props;

  return (
    <Container>
      <Text>{label}:</Text>
      <FlatList
        numColumns={4}
        data={colors}
        scrollEnabled={false}
        keyExtractor={(item, index) => `${item}`}
        renderItem={({ item, index }) => (
          <PlateWrapper
            onPress={() => {
              onChange && onChange(item);
            }}>
            <ColorPlate color={item} isActive={value === item} />
          </PlateWrapper>
        )}
      />
    </Container>
  );
};
