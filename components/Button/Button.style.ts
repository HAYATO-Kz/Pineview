import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const ButtonWithStyled = styled.TouchableOpacity<{
  block?: boolean;
  outline?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  min-height: 47px;
  border-radius: 5px;
  width: ${(p) => (p.block ? '100%' : 'null')};

  ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `
              border: 2px solid rgba(97, 52, 0, 0.6);
              background: #F0F0F0;   
                  `;
      } else {
        return `
              border: 2px solid #613400;
              background: #ffffff;   
              `;
      }
    } else {
      if (props.disabled) {
        return `
              border: 2px solid rgba(97, 52, 0, 0.6);
              background: rgba(97, 52, 0, 0.6);   
              `;
      } else {
        return `
              border: 2px solid #613400;
              background: #613400;   
              `;
      }
    }
  }}
`;

export const ButtonText = styled(DefaultText)<{
  outline?: boolean;
  disabled?: boolean;
}>`
  font-size: 14px;
  font-weight: 500;
  margin: 16px;
  ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `color: rgba(97, 52, 0, 0.6)`;
      } else {
        return `color: #613400`;
      }
    } else {
      if (props.disabled) {
        return `color: #f0f0f0`;
      } else {
        return `color: #ffffff`;
      }
    }
  }}
`;
