import styled, { css } from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Container = styled.View<{ hasBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  position: relative;
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
`;

export const MiddleBox = styled.View`
  display: flex;
  flex-direction: row;
  z-index: -1;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 14px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
