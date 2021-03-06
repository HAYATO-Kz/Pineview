import styled from 'styled-components/native';

export const Container = styled.View<{
  isTransparent?: boolean;
  background: string;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(p) => (p.isTransparent ? 'transparent' : p.background)};
`;

export const ContentContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  height: auto;
`;

export const Content = styled.View<{
  paddingTop: number;
  paddingRear: number;
}>`
  padding: ${p => `${p.paddingTop}px ${p.paddingRear}px`};
  display: flex;
  flex-direction: column;
  flex: 1;
`;
