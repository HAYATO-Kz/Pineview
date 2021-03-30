import React from 'react';
import { FlatList } from 'react-native';

import { FirstComponentWrapper, SecondComponentWrapper } from './Grid.style';

interface GridProps {
  data: React.ReactNode[];
  keyBase: string;
  columnSpace?: number;
  rowSpace?: number;
}

export const Grid = (props: GridProps) => {
  const { data, columnSpace = 16, rowSpace = 16, keyBase } = props;

  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item, index) => `${keyBase}_${index}`}
      renderItem={({ item, index }) => {
        if (index % 2 === 0) {
          return (
            <FirstComponentWrapper
              rowSpace={rowSpace / 2}
              columnSpace={columnSpace / 2}
              isLast={index === data.length - 1}>
              {item}
            </FirstComponentWrapper>
          );
        } else {
          return (
            <SecondComponentWrapper
              rowSpace={rowSpace / 2}
              columnSpace={columnSpace / 2}>
              {item}
            </SecondComponentWrapper>
          );
        }
      }}
    />
  );
};
