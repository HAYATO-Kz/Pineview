import styled from 'styled-components/native';

export const Container = styled.View<{ isTransparent?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(p) => (p.isTransparent ? 'transparent' : '#ffffff')};
`;

export const ContentContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  height: auto;
`;

export const Content = styled.View<{
  padding: string;
  isTransparent?: boolean;
}>`
  padding: ${(p) => p.padding};
  display: flex;
  flex-direction: column;
`;
