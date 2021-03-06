import styled from 'styled-components/native';

export const Wrapper = styled.View<{ color: string; width: number }>`
  padding: ${(p) => (p.width >= 40 ? '16px' : '4px')};
  width: ${(p) => `${p.width}px`};
  height: ${(p) => `${p.width}px`};
  border-radius: ${(p) => `${p.width / 2}px`};
  background: ${(p) => p.color};
  border: 2px solid rgba(97, 52, 0, 0.6);
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
