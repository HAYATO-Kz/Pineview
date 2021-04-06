import styled from 'styled-components/native';

export const FirstComponentWrapper = styled.View<{
  columnSpace: number;
  rowSpace: number;
}>`
  width: 50%;
  padding-right: ${(p) => `${p.columnSpace}px`};
  margin-top: ${(p) => `${p.rowSpace}px`};
  height: undefined;
`;

export const SecondComponentWrapper = styled.View<{
  columnSpace: number;
  rowSpace: number;
}>`
  width: 50%;
  padding-left: ${(p) => `${p.columnSpace}px`};
  margin-top: ${(p) => `${p.rowSpace}px`};
`;

export const GridContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
