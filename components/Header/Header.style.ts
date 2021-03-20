import styled, { css } from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

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

export const Title = styled(DefaultText)`
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
  color: #613400;
`;
