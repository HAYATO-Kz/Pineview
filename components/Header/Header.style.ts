import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ hasBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;

  ${(p) =>
    p.hasBorder &&
    css`
      border-bottom-color: rgba(0, 0, 0, 0.3);
      border-bottom-width: 1px;
    `}
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  color: #613400;
`;

export const Wrapper = styled.View``;
