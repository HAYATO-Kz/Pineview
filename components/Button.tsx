import React from 'react';
import styled from 'styled-components/native';

export interface ButtonProps {
  /**
   * Button's text
   */
  text: string;
  /**
   *  Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * Set the button type to outline
   */
  outline?: boolean;
  /**
   * Set the button to disabled state
   */
  disabled?: boolean;
  /**
   * Called when button is pressed
   */
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  const {text, ...buttonProps} = props;
  const {block, onPress, ...textProps} = buttonProps;

  return (
    <ButtonWithStyled {...buttonProps}>
      <ButtonText {...textProps}>{text}</ButtonText>
    </ButtonWithStyled>
  );
};

const ButtonWithStyled = styled.TouchableOpacity<{
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
            min-height: 51px;
            background: rgba(97, 52, 0, 0.6);   
            `;
      } else {
        return `
            min-height: 51px;
            background: #613400;   
            `;
      }
    }
  }}
`;

const ButtonText = styled.Text<{
  outline?: boolean;
  disabled?: boolean;
}>`
  font-weight: 700;
  font-size: 14px;
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
