import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const InputWithStyled = styled.TextInput<{ isError?: boolean }>`
  border-radius: 4px;
  height: 52px;
  padding: 16px;

  ${(props) => {
    if (props.editable) {
      if (props.isError) {
        return `
                border: 2px solid #f5222d;
                background: rgba(245, 34, 45, 0.1);
                `;
      } else {
        return `
                border: 2px solid #613400;
                background: #ffffff;
                `;
      }
    } else {
      return `
                border: 2px solid rgba(97, 52, 0, 0.6);
                background: #F0F0F0;
            `;
    }
  }}
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled(DefaultText)`
  color: #613400;
  font-size: 15px;
  font-weight: 600;
  margin: 0px 0px 6px;
`;

export const ErrorMessage = styled(DefaultText)`
  margin: 6px 0px 0px;
  color: #f5222d;
  font-weight: 400;
  font-size: 13px;
  height: 15px;
`;
