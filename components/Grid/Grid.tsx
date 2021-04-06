import React from 'react';
import { FlatList } from 'react-native';

import {
  FirstComponentWrapper,
  SecondComponentWrapper,
  GridContainer,
} from './Grid.style';

interface GridProps {
  data: React.ReactNode[];
  keyBase: string;
  columnSpace?: number;
  rowSpace?: number;
}

export const Grid = (props: GridProps) => {
  const { data, columnSpace = 16, rowSpace = 16, keyBase } = props;

  return (
    <GridContainer>
      {data.map((component, index) => {
        if (index % 2 === 0) {
          return (
            <FirstComponentWrapper
              columnSpace={columnSpace / 2}
              rowSpace={index <= 1 ? 0 : rowSpace}
              key={`${keyBase}_${index}`}>
              {component}
            </FirstComponentWrapper>
          );
        } else {
          return (
            <SecondComponentWrapper
              columnSpace={columnSpace / 2}
              rowSpace={index <= 1 ? 0 : rowSpace}
              key={`${keyBase}_${index}`}>
              {component}
            </SecondComponentWrapper>
          );
        }
      })}
    </GridContainer>
  );
};
