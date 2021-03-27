import styled from 'styled-components/native';

export const FirstComponentWrapper = styled.View<{
  columnSpace: number;
  rowSpace: number;
  isLast?: boolean;
}>`
  flex: 1;
  max-width: ${(p) => (p.isLast ? '50%' : '100%')};
  padding-right: ${(p) => `${p.columnSpace}px`};
  padding-left: ${(p) => `${p.columnSpace}px`};
  padding-bottom: ${(p) => `${p.rowSpace}px`};
  padding-top: ${(p) => `${p.rowSpace}px`};
`;

export const SecondComponentWrapper = styled.View<{
  columnSpace: number;
  rowSpace: number;
}>`
  padding-right: ${(p) => `${p.columnSpace}px`};
  padding-left: ${(p) => `${p.columnSpace}px`};
  padding-bottom: ${(p) => `${p.rowSpace}px`};
  padding-top: ${(p) => `${p.rowSpace}px`};
  flex: 1;
`;
