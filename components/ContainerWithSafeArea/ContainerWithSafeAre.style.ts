import styled from 'styled-components/native';

export const Container = styled.View<{isTransparent?: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background:  ${(p) => p.isTransparent? 'transparent':'#ffffff'};
`;

export const ContentContainer = styled.ScrollView<{ padding: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(p) => p.padding};
`;
