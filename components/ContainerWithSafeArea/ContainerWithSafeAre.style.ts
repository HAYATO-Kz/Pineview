import styled from 'styled-components/native';

export const Container = styled.View<{ padding: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(p) => p.padding};
`;
