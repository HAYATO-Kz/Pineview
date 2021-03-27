import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
`;

export const ContentContainer = styled.ScrollView<{ padding: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(p) => p.padding};
`;
