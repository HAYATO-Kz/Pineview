import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const ModalContainer = styled.View`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items:center;
  width:100%;
  margin: 24px;
`;

export const ModalWrapper = styled.View`
  flex: 1;
  background: #FCF8BB;
  padding: 0 53px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GifWrapper = styled.View`
    width:100%;
    aspect-ratio: 0.75;
    padding:8px;
`

export const LoadingGif = styled.Image`
    width:100%;
    height:100%;
`

export const LoadingText = styled(DefaultText)`
  font-size: 18px;
  font-weight: 700;
`;
