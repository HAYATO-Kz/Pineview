import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Plate = styled.View<{ color: string; isActive?: boolean }>`
  width: 100%;
  aspect-ratio: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  border-width: 2px;
  border-radius: 4px;
  background: ${(p) => p.color};
  border-color: ${(p) => (p.isActive ? 'rgba(62, 23, 0, 0.5)' : p.color)};
`;

export const ActiveText = styled(DefaultText)`
  font-size: 10px;
  font-weight: 400;
`;
