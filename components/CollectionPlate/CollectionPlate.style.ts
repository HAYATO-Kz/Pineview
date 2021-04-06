import styled from 'styled-components/native';

export const Plate = styled.View<{ isActive?: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${(p) => (p.isActive ? 'rgba(62, 23, 0, 0.5)' : 'transparent')};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
