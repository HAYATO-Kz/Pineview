import styled from 'styled-components/native';

export const Wrapper = styled.View<{ color: string; width: number }>`
  padding: 20px;
  width: ${(p) => `${p.width}px`};
  aspect-ratio: 1;
  border-radius: 16px;
  background: ${(p) => p.color};
  border: 1px solid rgba(62, 23, 0, 0.5);
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
